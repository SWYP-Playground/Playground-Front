import {
  RequirementDescription,
  RequirementFlex,
  RequirementHeader,
  RequirementJoin,
  RequirementTime,
  RequirementTitle,
  RequirementPlaygroundName,
  PlaygroundDetails,
} from '@/components/common/RequirementRoom/RequirementRoom.style';
import StatusBadge from '@/components/common/StatusBadge/StatusBadge';

interface RequirementRoomProps {
  onClick: () => void;
  status: string;
  currentCount: number;
  title: string;
  description?: string;
  playgroundName?: string;
  playTime: string;
}

const RequirementRoom = ({
  onClick,
  status,
  currentCount,
  title,
  description,
  playgroundName,
  playTime,
}: RequirementRoomProps) => {
  return (
    <RequirementFlex onClick={onClick}>
      <RequirementHeader>
        <StatusBadge status={status} />
        <RequirementJoin status={status}>{currentCount}명 참여 중</RequirementJoin>
      </RequirementHeader>
      <RequirementTitle>{title}</RequirementTitle>
      <RequirementDescription>{description}</RequirementDescription>
      <PlaygroundDetails>
        <RequirementPlaygroundName>{playgroundName}</RequirementPlaygroundName>
        <RequirementTime>{playTime}</RequirementTime>
      </PlaygroundDetails>
    </RequirementFlex>
  );
};

export default RequirementRoom;
