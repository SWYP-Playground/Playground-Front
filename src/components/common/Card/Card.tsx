import { useNavigate } from 'react-router-dom';

import {
  CardFlex,
  CardMain,
  CardAvatar,
  CardHeader,
  CardContent,
  CardUser,
  CardNickname,
  CardInfo,
} from '@/components/common/Card/Card.style';
import { useParentQuery } from '@/hooks/api/useParentQuery';
import { ParentRoleType } from '@/types/parent';
import { convertRole } from '@/utils/convertRole';
import { getRandomImage } from '@/components/profile/RandomImage.tsx';
import { PATH } from '@/constants/path';

interface CardProps {
  onClick?: () => void;
  id?: string;
  nickname?: string;
  status?: ParentRoleType;
  address?: string;
  image?: string;
  content?: string;
  isSummary?: boolean;
}

const Card = ({
  onClick,
  id,
  nickname,
  status,
  address,
  content,
  isSummary = false,
}: CardProps) => {
  const navigate = useNavigate();
  const { ParentData } = useParentQuery(Number(id));

  const goToProfileInfo = (id: string) => (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    navigate(PATH.PROFILE_INFO(id));
  };

  return (
    <CardFlex onClick={onClick}>
      <CardMain>
        <CardHeader>
          <CardUser>
            {id && ParentData && (
              <>
                <CardNickname>{ParentData.nickname}</CardNickname>
                <CardInfo>
                  {convertRole(ParentData.role) || ''}·{ParentData.address}
                </CardInfo>
              </>
            )}
            {!id && (
              <>
                <CardNickname>{nickname}</CardNickname>
                <CardInfo>
                  {status ? convertRole(status) : ''}·{address}
                </CardInfo>
              </>
            )}
          </CardUser>
          <CardAvatar
            size="5"
            src={getRandomImage()}
            fallback="A"
            radius="full"
            onClick={id ? goToProfileInfo(id) : () => {}}
          />
        </CardHeader>
        <CardContent isSummary={isSummary}>{content}</CardContent>
      </CardMain>
    </CardFlex>
  );
};

export default Card;
