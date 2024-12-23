import {
  PlayGroundParticipantFlex,
  PlayGroundParticipantSpan,
} from '@/components/playGround/PlayGroundParticipant/PlayGroundParticipant.style';
import { Avatar } from '@radix-ui/themes';

interface PlayGroundParticipantProps {
  image: string;
  nickname: string;
  onClick?: () => void;
}

const PlayGroundParticipant = ({ image, nickname, onClick }: PlayGroundParticipantProps) => {
  return (
    <PlayGroundParticipantFlex onClick={onClick}>
      <Avatar src={image} fallback="A" radius="full" size="4" />
      <PlayGroundParticipantSpan>{nickname}</PlayGroundParticipantSpan>
    </PlayGroundParticipantFlex>
  );
};

export default PlayGroundParticipant;
