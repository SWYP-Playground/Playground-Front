import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ReportData } from '@/types/report';
import { getAllReport } from '@/api/report/getAllReport';

export const useAllReportQuery = () => {
  const { data: AllReportData } = useSuspenseQuery<ReportData[], AxiosError>({
    queryKey: ['report'],
    queryFn: () => getAllReport(),
  });

  return { AllReportData };
};
