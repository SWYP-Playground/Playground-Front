import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { FindFriendData } from '@/types/friend';
import { getMyFindFriendList } from '@/api/findFriend/getMyFindFriendList';

export const useMyFindFriendListQuery = () => {
  const { data: MyFindFriendListData } = useSuspenseQuery<FindFriendData[], AxiosError>({
    queryKey: ['myFindFriendList'],
    queryFn: () => getMyFindFriendList(),
  });

  return { MyFindFriendListData };
};
