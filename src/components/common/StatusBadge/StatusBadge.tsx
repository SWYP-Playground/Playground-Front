import { StatusBadgeStyling } from '@/components/common/StatusBadge/StatusBadge.style';
import { StatusType } from '@/types/friend';
import { convertStatus } from '@/utils/convertStatus';

export interface RoomStatusProps {
  status: StatusType;
}

const StatusBadge = ({ status }: RoomStatusProps) => {
  return <StatusBadgeStyling status={status}>{convertStatus(status)}</StatusBadgeStyling>;
};

export default StatusBadge;
