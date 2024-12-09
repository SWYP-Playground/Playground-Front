import StatusBadge from '@/components/common/StatusBadge/StatusBadge';
import {
  PlayGroundRoomContentBottom,
  PlayGroundRoomContentStyling,
  PlayGroundRoomDescription,
  PlayGroundRoomLocation,
  PlayGroundRoomLocationSpan,
  PlayGroundRoomTime,
  PlayGroundRoomTimeSpan,
  PlayGroundRoomTitle,
} from '@/components/playGround/PlayGroundRoomContent/PlayGroundRoomContent.style';
import VectorIcon from '@/assets/svg/vector.svg?react';
import CalendarIcon from '@/assets/svg/calendar.svg?react';

interface PlayGroundRoomContentProps {
  status: string;
  title: string;
  description: string;
  location: string;
  playTime: string;
}

const PlayGroundRoomContent = ({
  status,
  title,
  description,
  location,
  playTime,
}: PlayGroundRoomContentProps) => {
  return (
    <PlayGroundRoomContentStyling>
      <StatusBadge status={status} />
      <PlayGroundRoomTitle>{title}</PlayGroundRoomTitle>
      <PlayGroundRoomDescription>{description}</PlayGroundRoomDescription>
      <PlayGroundRoomContentBottom>
        <PlayGroundRoomLocation>
          <VectorIcon />
          <PlayGroundRoomLocationSpan>{location}</PlayGroundRoomLocationSpan>
        </PlayGroundRoomLocation>
        <PlayGroundRoomTime>
          <CalendarIcon />
          <PlayGroundRoomTimeSpan>{playTime}</PlayGroundRoomTimeSpan>
        </PlayGroundRoomTime>
      </PlayGroundRoomContentBottom>
    </PlayGroundRoomContentStyling>
  );
};

export default PlayGroundRoomContent;
