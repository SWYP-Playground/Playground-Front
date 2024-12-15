import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { FindFriendRoomData } from '@/types/friend';

export const getMyFindFriendList = async () => {
  const { data } = await axiosInstance.get<FindFriendRoomData>(END_POINTS.MY_FIND_FRIEND_LIST);

  return data;
};
