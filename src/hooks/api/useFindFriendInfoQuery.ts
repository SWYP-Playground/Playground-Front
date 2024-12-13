import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getFindFriendInfo } from '@/api/findFriend/getFindFriendInfo';
import { FindFriendData } from '@/types/friend';

export const useFindFriendInfoQuery = (findFriendId: number) => {
  const { data: FindFriendInfoData } = useSuspenseQuery<FindFriendData, AxiosError>({
    queryKey: ['findFriendInfo', findFriendId],
    queryFn: () => getFindFriendInfo(findFriendId),
  });

  return { FindFriendInfoData };
};
