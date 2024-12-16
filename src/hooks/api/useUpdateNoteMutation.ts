import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchNote } from '@/api/note/patchNote';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient();

  const updateNoteMutation = useMutation({
    mutationFn: patchNote,
    onSuccess: (_, { noteId }) => {
      queryClient.invalidateQueries({ queryKey: ['note', noteId] });
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return updateNoteMutation;
};
