import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

interface postResetPasswordParams {
  email: string;
}

export const postResetPassword = async ({ email }: postResetPasswordParams) => {
  return await axiosInstance.post(END_POINTS.RESET_PASSWORD(email));
};
