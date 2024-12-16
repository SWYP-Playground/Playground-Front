import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchComment } from '@/api/comment/patchComment';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();

  const updateCommentMutation = useMutation({
    mutationFn: patchComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment'] });
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return updateCommentMutation;
};
