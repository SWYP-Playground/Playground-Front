import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

export interface PatchParentParams {
  parentId: number;
  formData: FormData;
}

export const patchParent = async ({ parentId, formData }: PatchParentParams) => {
  return await axiosInstance.patch(END_POINTS.UPDATE_PARENT(parentId), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
