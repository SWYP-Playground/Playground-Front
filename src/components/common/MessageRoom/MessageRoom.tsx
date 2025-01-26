import {
  MessageRoomAvatar,
  MessageRoomContent,
  MessageRoomFlex,
  MessageRoomRead,
  MessageRoomTime,
} from '@/components/common/MessageRoom/MessageRoom.style';
import { PATH } from '@/constants/path';
import formatToKoreanTime from '@/utils/formatToKoreanTime';
import { Flex } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

interface MessageRoomProps {
  id: string;
  avatar: string;
  content: string;
  isCurrentUser: boolean;
  isFirstMessageByUser: boolean;
  sentAt: string;
  isRead: boolean;
}

const MessageRoom = ({
  id,
  avatar,
  content,
  isCurrentUser,
  isFirstMessageByUser,
  sentAt,
  isRead,
}: MessageRoomProps) => {
  const navigate = useNavigate();

  const goToProfileInfo = (id: string) => (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    navigate(PATH.PROFILE_INFO(id));
  };

  return (
    <MessageRoomFlex isCurrentUser={isCurrentUser}>
      {!isCurrentUser &&
        (isFirstMessageByUser ? (
          <MessageRoomAvatar
            size="4"
            src={avatar}
            fallback="A"
            radius="full"
            onClick={id ? goToProfileInfo(id) : () => {}}
          />
        ) : (
          <MessageRoomAvatar
            size="4"
            src={undefined}
            fallback=""
            radius="full"
            style={{
              visibility: 'hidden',
            }}
          />
        ))}
      <Flex direction="column">
        <Flex>
          {!isRead && isCurrentUser && <MessageRoomRead>1</MessageRoomRead>}
          <MessageRoomContent isCurrentUser={isCurrentUser}>{content}</MessageRoomContent>
          {!isRead && !isCurrentUser && <MessageRoomRead>1</MessageRoomRead>}
        </Flex>

        <MessageRoomTime isCurrentUser={isCurrentUser}>
          {formatToKoreanTime(sentAt)}
        </MessageRoomTime>
      </Flex>
    </MessageRoomFlex>
  );
};

export default MessageRoom;
