import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { ReportData } from '@/types/report';

export const getAllReport = async () => {
  const { data } = await axiosInstance.get<ReportData[]>(END_POINTS.REPORT_ALL);

  return data;
};
