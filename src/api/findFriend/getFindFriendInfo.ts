import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { FindFriendData } from '@/types/friend';

export const getFindFriendInfo = async (findFriendId: number) => {
  const { data } = await axiosInstance.get<FindFriendData>(
    END_POINTS.FIND_FRIEND_INFO(findFriendId),
  );

  return data;
};
