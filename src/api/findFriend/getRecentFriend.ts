import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { RecentFriendData } from '@/types/friend';

// 데이터 타입부분은 아직 적혀져 있지 않아서 임시로 FindFriendData로 설정
export const getRecentFriend = async () => {
  const { data } = await axiosInstance.get<RecentFriendData>(END_POINTS.RECENT_FIND_FRIEND_LIST);

  return data;
};
