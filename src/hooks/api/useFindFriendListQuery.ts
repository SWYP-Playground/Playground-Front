import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { FindFriendRoomData } from '@/types/friend';
import { getFindFriendList } from '@/api/findFriend/getFindFriendList';

export const useFindFriendListQuery = (playgroundId: string) => {
  const { data } = useSuspenseQuery<FindFriendRoomData, AxiosError>({
    queryKey: ['findFriendList', playgroundId],
    queryFn: () => getFindFriendList(playgroundId),
  });

  return { FindFriendListData: data.data };
};
