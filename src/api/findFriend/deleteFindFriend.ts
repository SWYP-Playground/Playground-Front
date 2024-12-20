import { END_POINTS } from '@/constants/api';
import { axiosInstance } from '@/api/axiosInstance';

export interface deleteFindFriendParams {
  playgroundId: string;
  findFriendId: number;
}

export const deleteFindFriend = ({ playgroundId, findFriendId }: deleteFindFriendParams) => {
  return axiosInstance.delete(END_POINTS.FIND_FRIEND(playgroundId, findFriendId));
};
