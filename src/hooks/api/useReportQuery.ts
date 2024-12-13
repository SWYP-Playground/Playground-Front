import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ReportData } from '@/types/report';
import { getReport } from '@/api/report/getReport';

export const useReportQuery = (reportId: number) => {
  const { data: ReportData } = useSuspenseQuery<ReportData, AxiosError>({
    queryKey: ['report', reportId],
    queryFn: () => getReport(reportId),
  });

  return { ReportData };
};
