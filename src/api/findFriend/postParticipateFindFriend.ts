import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

export interface PostParticipateFindFriendParams {
  playgroundId: string;
  findFriendId: number;
  action: string;
}

// 데이터 타입부분은 아직 적혀져 있지 않아서 임시로 FindFriendData로 설정
export const postParticipateFindFriend = async ({
  playgroundId,
  findFriendId,
  action,
}: PostParticipateFindFriendParams) => {
  const { data } = await axiosInstance.post(
    END_POINTS.PARTICIPATE_FIND_FRIEND(playgroundId, findFriendId, action),
  );

  return data;
};
