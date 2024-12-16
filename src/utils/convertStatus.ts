import { ROOM_STATUS } from '@/constants/status';
import { StatusType } from '@/types/friend';

export const convertStatus = (status: StatusType) => {
  if (status === 'RECRUITING') return ROOM_STATUS.RECRUITING;
  if (status === 'PLAYING') return ROOM_STATUS.PLAYING;
  if (status === 'COMPLETE') return ROOM_STATUS.COMPLETE;
};
