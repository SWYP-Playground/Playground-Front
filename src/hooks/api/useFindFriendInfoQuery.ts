import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { getFindFriendInfo } from '@/api/findFriend/getFindFriendInfo';
import { FindFriendData } from '@/types/friend';

export const useFindFriendInfoQuery = (findFriendId: number) => {
  const { data: FindFriendInfoData } = useQuery<FindFriendData, AxiosError>({
    queryKey: ['findFriendInfo', findFriendId],
    queryFn: () => getFindFriendInfo(findFriendId),
    enabled: !!findFriendId,
  });

  return { FindFriendInfoData };
};
