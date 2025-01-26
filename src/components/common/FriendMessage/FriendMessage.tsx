import { useNavigate } from 'react-router-dom';

import {
  FriendMessageAvatar,
  FriendMessageContent,
  FriendMessageDescription,
  FriendMessageFlex,
  FriendMessageInfo,
  FriendMessageMain,
  FriendMessageNickname,
  FriendMessageUser,
} from '@/components/common/FriendMessage/FriendMessage.style';
import { getRandomImage } from '@/components/profile/RandomImage';
import { PATH } from '@/constants/path';
import { useParentQuery } from '@/hooks/api/useParentQuery';
import { ParentRoleType } from '@/types/parent';
import { convertRole } from '@/utils/convertRole';

interface FriendMessageProps {
  onClick?: () => void;
  id?: string;
  nickname?: string;
  status?: ParentRoleType;
  address?: string;
  image?: string;
  content?: string;
  isSummary?: boolean;
}

const FriendMessage = ({
  onClick,
  id,
  nickname,
  status,
  address,
  // image,
  content,
  isSummary = false,
}: FriendMessageProps) => {
  const navigate = useNavigate();
  const { ParentData } = useParentQuery(Number(id));

  const goToProfileInfo = (id: string) => (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    navigate(PATH.PROFILE_INFO(id));
  };

  return (
    <FriendMessageFlex onClick={onClick}>
      <FriendMessageMain>
        <FriendMessageAvatar
          size="5"
          src={getRandomImage()}
          fallback="A"
          radius="full"
          onClick={id ? goToProfileInfo(id) : () => {}}
        />
        <FriendMessageContent>
          <FriendMessageUser>
            {id && ParentData && (
              <>
                <FriendMessageNickname>{ParentData.nickname}</FriendMessageNickname>
                <FriendMessageInfo>
                  {convertRole(ParentData.role) || ''}·{ParentData.address}
                </FriendMessageInfo>
              </>
            )}
            {!id && (
              <>
                <FriendMessageNickname>{nickname}</FriendMessageNickname>
                <FriendMessageInfo>
                  {status ? convertRole(status) : ''}·{address}
                </FriendMessageInfo>
              </>
            )}
          </FriendMessageUser>
          <FriendMessageDescription isSummary={isSummary}>{content}</FriendMessageDescription>
        </FriendMessageContent>
      </FriendMessageMain>
    </FriendMessageFlex>
  );
};

export default FriendMessage;
