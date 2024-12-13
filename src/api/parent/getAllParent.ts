import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { ParentData } from '@/types/parent';

export const getAllParent = async () => {
  const { data } = await axiosInstance.get<ParentData[]>(END_POINTS.PARENT_ALL);

  return data;
};
