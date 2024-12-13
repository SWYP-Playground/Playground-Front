import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { FindFriendData } from '@/types/friend';
import { getFindFriendList } from '@/api/findFriend/getFindFriendList';

export const useFindFriendListQuery = (playgroundId: string) => {
  const { data: FindFriendListData } = useSuspenseQuery<FindFriendData[], AxiosError>({
    queryKey: ['findFriendList', playgroundId],
    queryFn: () => getFindFriendList(playgroundId),
  });

  return { FindFriendListData };
};
