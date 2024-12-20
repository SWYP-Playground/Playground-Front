import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchFindFriendInfo } from '@/api/findFriend/patchFindFriendInfo';
import { useNavigate } from 'react-router-dom';

export const useUpdateFindFriendInfoMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const updateFindFriendInfoMutation = useMutation({
    mutationFn: patchFindFriendInfo,
    onSuccess: (_, { findFriendId }) => {
      queryClient.invalidateQueries({ queryKey: ['findFriendInfo', findFriendId] });
      navigate(-1);
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return updateFindFriendInfoMutation;
};
