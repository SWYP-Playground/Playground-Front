import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteFindFriend } from '@/api/findFriend/deleteFindFriend';
import { useNavigate } from 'react-router-dom';

export const useDeleteRoomMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteRoomMutation = useMutation({
    mutationFn: deleteFindFriend,
    onSuccess: (_, { playgroundId }) => {
      queryClient.invalidateQueries({ queryKey: ['findFriendList', playgroundId] });
      navigate(-1);
      toast.success('삭제되었습니다!');
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return deleteRoomMutation;
};
