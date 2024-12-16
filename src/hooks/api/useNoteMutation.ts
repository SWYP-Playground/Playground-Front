import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNote } from '@/api/note/postNote';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useNoteMutation = () => {
  const queryClient = useQueryClient();

  const noteMutation = useMutation({
    mutationFn: postNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['note'] });
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return noteMutation;
};
