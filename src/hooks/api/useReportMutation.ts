import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postReport } from '@/api/report/postReport';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useReportMutation = () => {
  const queryClient = useQueryClient();

  const reportMutation = useMutation({
    mutationFn: postReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['report'] });
    },
    onError: () => {
      toast('오류가 발생했습니다. 잠시 후 다시 시도해 주세요');
    },
  });

  return reportMutation;
};
