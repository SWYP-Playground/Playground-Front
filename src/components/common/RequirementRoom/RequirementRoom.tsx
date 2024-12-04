import {
  RequirementDescription,
  RequirementFlex,
  RequirementHeader,
  RequirementJoin,
  RequirementTag,
  RequirementTime,
  RequirementTitle,
} from '@/components/common/RequirementRoom/RequirementRoom.style';

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
        <RequirementTag>{status}</RequirementTag>
        <RequirementJoin>{currentCount}명 참여 중</RequirementJoin>
      </RequirementHeader>
      <RequirementTitle>{title}</RequirementTitle>
      <RequirementDescription>{description}</RequirementDescription>
      <RequirementTime>{playTime}</RequirementTime>
    </RequirementFlex>
  );
};

export default RequirementRoom;
