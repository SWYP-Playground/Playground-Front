import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { FindFriendRequestBody } from '@/types/friend';

export interface PostRegisterFindFriendParams {
  playgroundId: string;
  findFriendData: FindFriendRequestBody;
}

// 데이터 타입부분은 아직 적혀져 있지 않아서 임시로 FindFriendData로 설정
export const postRegisterFindFriend = async ({
  playgroundId,
  findFriendData,
}: PostRegisterFindFriendParams) => {
  const { data } = await axiosInstance.post(
    END_POINTS.REGISTER_FIND_FRIEND(playgroundId),
    findFriendData,
  );

  return data;
};
