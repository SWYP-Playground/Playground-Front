import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { FindFriendData } from '@/types/friend';
import { getMainFindFriendList } from '@/api/findFriend/getMainFindFriendList';

export const useMainFindFriendListQuery = () => {
  const { data: MainFindFriendListData } = useSuspenseQuery<FindFriendData[], AxiosError>({
    queryKey: ['mainFindFriendList'],
    queryFn: () => getMainFindFriendList(),
  });

  return { MainFindFriendListData };
};
