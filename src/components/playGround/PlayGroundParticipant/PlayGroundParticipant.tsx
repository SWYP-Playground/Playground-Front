import {
  PlayGroundParticipantFlex,
  PlayGroundParticipantSpan,
} from '@/components/playGround/PlayGroundParticipant/PlayGroundParticipant.style';
import { Avatar } from '@radix-ui/themes';
import { getRandomImage } from '@/components/profile/RandomImage.tsx';

interface PlayGroundParticipantProps {
  image?: string;
  nickname: string;
  onClick?: () => void;
}

const PlayGroundParticipant = ({ nickname, onClick }: PlayGroundParticipantProps) => {
  return (
    <PlayGroundParticipantFlex onClick={onClick}>
      <Avatar src={getRandomImage()} fallback="A" radius="full" size="4" />
      <PlayGroundParticipantSpan>{nickname}</PlayGroundParticipantSpan>
    </PlayGroundParticipantFlex>
  );
};

export default PlayGroundParticipant;
