import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

export interface PatchParentParams {
  parentId: number;
}

// form-data 관련해서 나중에 수정해야 함
export const patchParent = async ({ parentId }: PatchParentParams) => {
  return await axiosInstance.patch(END_POINTS.UPDATE_PARENT(parentId));
};
