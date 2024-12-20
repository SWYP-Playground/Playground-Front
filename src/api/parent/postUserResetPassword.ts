import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

interface PostUserResetPasswordParams {
  parentId: string;
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export const postUserResetPassword = async (params: PostUserResetPasswordParams) => {
  return await axiosInstance.post(END_POINTS.USER_RESET_PASSWORD(params.parentId), {
    currentPassword: params.currentPassword,
    newPassword: params.newPassword,
    newPasswordConfirm: params.newPasswordConfirm,
  });
};
