import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postParticipateFindFriend } from '@/api/findFriend/postParticipateFindFriend';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useParticipateFindFriendMutation = () => {
  const queryClient = useQueryClient();

  const participateFindFriendMutation = useMutation({
    mutationFn: postParticipateFindFriend,
    onSuccess: (_, { findFriendId }) => {
      queryClient.invalidateQueries({ queryKey: ['findFriendInfo', findFriendId] });
    },
    onError: () => {
      toast('오류가 발생했습니다. 잠시 후 다시 시도해 주세요');
    },
  });

  return participateFindFriendMutation;
};
