import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { ReportData } from '@/types/report';

export const getReport = async (reportId: number) => {
  const { data } = await axiosInstance.get<ReportData>(END_POINTS.REPORT(reportId));

  return data;
};
