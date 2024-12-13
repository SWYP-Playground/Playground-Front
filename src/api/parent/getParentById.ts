import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { ParentData } from '@/types/parent';

export const getParentById = async (parentId: number) => {
  const { data } = await axiosInstance.get<ParentData>(END_POINTS.PARENT(parentId));

  return data;
};
