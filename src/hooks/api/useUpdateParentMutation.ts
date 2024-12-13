import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchParent } from '@/api/parent/patchParent';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useUpdateParentMutation = () => {
  const queryClient = useQueryClient();

  const updateParentMutation = useMutation({
    mutationFn: patchParent,
    onSuccess: (_, { parentId }) => {
      queryClient.invalidateQueries({ queryKey: ['parent', parentId] });
    },
    onError: () => {
      toast('수정에 실패했습니다. 잠시 후 다시 시도해 주세요');
    },
  });

  return updateParentMutation;
};
