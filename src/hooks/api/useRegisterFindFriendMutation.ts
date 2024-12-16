import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postRegisterFindFriend } from '@/api/findFriend/postRegisterFindFriend';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useRegisterFindFriendMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const registerFindFriendMutation = useMutation({
    mutationFn: postRegisterFindFriend,
    onSuccess: (_, { playgroundId }) => {
      queryClient.invalidateQueries({ queryKey: ['findFriendList', playgroundId] });
      navigate(PATH.ROOT);
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return registerFindFriendMutation;
};
