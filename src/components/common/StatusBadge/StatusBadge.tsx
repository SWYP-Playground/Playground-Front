import { StatusBadgeStyling } from '@/components/common/StatusBadge/StatusBadge.style';

export interface RoomStatusProps {
  status: string;
}

const StatusBadge = ({ status }: RoomStatusProps) => {
  return <StatusBadgeStyling status={status}>{status}</StatusBadgeStyling>;
};

export default StatusBadge;
