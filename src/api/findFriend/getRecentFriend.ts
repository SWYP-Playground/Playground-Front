import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { RecentFriendData } from '@/types/friend';

export const getRecentFriend = async () => {
  const { data } = await axiosInstance.get<RecentFriendData>(END_POINTS.RECENT_FIND_FRIEND_LIST);

  return data;
};
