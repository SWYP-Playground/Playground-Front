import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { ReportData, ReportRequestBody } from '@/types/report';

export interface PostReportParams {
  ReportData: ReportRequestBody;
}

export const postReport = async ({ ReportData }: PostReportParams) => {
  const { data } = await axiosInstance.post<ReportData>(END_POINTS.CREATE_REPORT, ReportData);

  return data;
};
