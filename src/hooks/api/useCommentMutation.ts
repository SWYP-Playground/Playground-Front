import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postComment } from '@/api/comment/postComment';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useCommentMutation = () => {
  const queryClient = useQueryClient();

  const commentMutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment'] });
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return commentMutation;
};
