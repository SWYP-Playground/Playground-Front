import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteNote } from '@/api/note/deleteNote';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['note'] });
    },
    onError: () => {
      toast('삭제에 실패했습니다. 잠시 후 다시 시도해 주세요');
    },
  });

  return deleteNoteMutation;
};
