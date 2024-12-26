import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { FindFriendRoomType } from '@/types/friend';
import { getMainFindFriendList } from '@/api/findFriend/getMainFindFriendList';

export const useMainFindFriendListQuery = () => {
  const { data: MainFindFriendListData } = useSuspenseQuery<FindFriendRoomType[], AxiosError>({
    queryKey: ['mainFindFriendList'],
    queryFn: () => getMainFindFriendList(),
  });

  return { MainFindFriendListData };
};
