import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { FindFriendRoomData } from '@/types/friend';
import { getMyFindFriendList } from '@/api/findFriend/getMyFindFriendList';

export const useMyFindFriendListQuery = () => {
  const { data } = useSuspenseQuery<FindFriendRoomData, AxiosError>({
    queryKey: ['myFindFriendList'],
    queryFn: () => getMyFindFriendList(),
  });

  return { MyFindFriendListData: data.data };
};
