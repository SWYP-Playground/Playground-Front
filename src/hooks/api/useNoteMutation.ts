import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNote } from '@/api/note/postNote';

export const useNoteMutation = () => {
  const queryClient = useQueryClient();

  const noteMutation = useMutation({
    mutationFn: postNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['note'] });
      toast.success('쪽지가 전송되었습니다!');
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return noteMutation;
};
