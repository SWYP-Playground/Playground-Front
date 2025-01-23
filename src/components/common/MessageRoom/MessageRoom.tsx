import {
  MessageRoomAvatar,
  MessageRoomContent,
  MessageRoomFlex,
} from '@/components/common/MessageRoom/MessageRoom.style';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

interface MessageRoomProps {
  id: string;
  avatar: string;
  content: string;
  isCurrentUser: boolean;
  isFirstMessageByUser: boolean;
}

const MessageRoom = ({
  id,
  avatar,
  content,
  isCurrentUser,
  isFirstMessageByUser,
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
            size="5"
            src={avatar}
            fallback="A"
            radius="full"
            onClick={id ? goToProfileInfo(id) : () => {}}
          />
        ) : (
          <MessageRoomAvatar
            size="5"
            src={undefined}
            fallback=""
            radius="full"
            style={{
              visibility: 'hidden',
            }}
          />
        ))}
      <MessageRoomContent isCurrentUser={isCurrentUser}>{content}</MessageRoomContent>
    </MessageRoomFlex>
  );
};

export default MessageRoom;
