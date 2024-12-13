import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { FindFriendData } from '@/types/friend';
import { getRecentFriend } from '@/api/findFriend/getRecentFriend';

export const useRecentFriendQuery = () => {
  const { data: RecentFriendData } = useSuspenseQuery<FindFriendData[], AxiosError>({
    queryKey: ['recentFriend'],
    queryFn: () => getRecentFriend(),
  });

  return { RecentFriendData };
};
