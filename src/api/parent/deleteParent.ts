import { END_POINTS } from '@/constants/api';
import { axiosInstance } from '@/api/axiosInstance';

export interface DeleteParentParams {
  parentId: number;
}

export const deleteParent = ({ parentId }: DeleteParentParams) => {
  return axiosInstance.delete(END_POINTS.DELETE_PARENT(parentId));
};
