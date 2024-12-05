import {
  RequirementDescription,
  RequirementFlex,
  RequirementHeader,
  RequirementJoin,
  RequirementTime,
  RequirementTitle,
  StatusBadge,
} from '@/components/common/RequirementRoom/RequirementRoom.style';
import { ROOM_STATUS } from '@/constants/status';

interface RequirementRoomProps {
  onClick: () => void;
  status: string;
  currentCount: number;
  title: string;
  description: string;
  playTime: string;
}

const RequirementRoom = ({
  onClick,
  status,
  currentCount,
  title,
  description,
  playTime,
}: RequirementRoomProps) => {
  return (
    <RequirementFlex onClick={onClick}>
      <RequirementHeader>
        <StatusBadge status={ROOM_STATUS.HIRING}>{status}</StatusBadge>
        <RequirementJoin status={ROOM_STATUS.HIRING}>{currentCount}명 참여 중</RequirementJoin>
      </RequirementHeader>
      <RequirementTitle>{title}</RequirementTitle>
      <RequirementDescription>{description}</RequirementDescription>
      <RequirementTime>{playTime}</RequirementTime>
    </RequirementFlex>
  );
};

export default RequirementRoom;
