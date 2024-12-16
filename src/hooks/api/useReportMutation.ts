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
    onError: (error) => {
      toast(error.message);
    },
  });

  return reportMutation;
};
