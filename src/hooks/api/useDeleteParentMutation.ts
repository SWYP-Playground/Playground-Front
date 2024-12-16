import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteParent } from '@/api/parent/deleteParent';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useDeleteParentMutation = () => {
  const queryClient = useQueryClient();

  const deleteParentMutation = useMutation({
    mutationFn: deleteParent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parent'] });
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return deleteParentMutation;
};
