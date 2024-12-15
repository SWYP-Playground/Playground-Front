import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { RecentFriendData } from '@/types/friend';
import { getRecentFriend } from '@/api/findFriend/getRecentFriend';

export const useRecentFriendQuery = () => {
  const { data } = useSuspenseQuery<RecentFriendData, AxiosError>({
    queryKey: ['recentFriend'],
    queryFn: () => getRecentFriend(),
  });

  return { RecentFriendData: data.data };
};
