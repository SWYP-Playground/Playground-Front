import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { FindFriendRoomData } from '@/types/friend';

export const getFindFriendList = async (playgroundId: string) => {
  const { data } = await axiosInstance.get<FindFriendRoomData>(
    END_POINTS.FIND_FRIEND_LIST(playgroundId),
  );

  return data;
};
