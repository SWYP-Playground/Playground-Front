import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { FindFriendData } from '@/types/friend';

export const getFindFriendList = async (playgroundId: string) => {
  const { data } = await axiosInstance.get<FindFriendData[]>(
    END_POINTS.FIND_FRIEND_LIST(playgroundId),
  );

  return data;
};
