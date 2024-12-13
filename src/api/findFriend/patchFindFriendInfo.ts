import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { FindFriendData, FindFriendRequestBody } from '@/types/friend';

export interface PatchFindFriendInfoParams {
  playgroundId: string;
  findFriendId: number;
  data: FindFriendRequestBody;
}

export const patchFindFriendInfo = async ({
  playgroundId,
  findFriendId,
  data,
}: PatchFindFriendInfoParams) => {
  return await axiosInstance.patch<FindFriendData>(
    END_POINTS.FIND_FRIEND(playgroundId, findFriendId),
    data,
  );
};
