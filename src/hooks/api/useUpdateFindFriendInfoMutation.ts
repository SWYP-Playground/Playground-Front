import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchFindFriendInfo } from '@/api/findFriend/patchFindFriendInfo';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useUpdateFindFriendInfoMutation = () => {
  const queryClient = useQueryClient();

  const updateFindFriendInfoMutation = useMutation({
    mutationFn: patchFindFriendInfo,
    onSuccess: (_, { findFriendId }) => {
      queryClient.invalidateQueries({ queryKey: ['findFriendInfo', findFriendId] });
    },
    onError: () => {
      toast('수정에 실패했습니다. 잠시 후 다시 시도해 주세요');
    },
  });

  return updateFindFriendInfoMutation;
};
