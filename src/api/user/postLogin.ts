import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { LoginData, LoginRequestBody } from '@/types/user';

export interface PostLoginParams {
  LoginData: LoginRequestBody;
}

export const postLogin = async ({ LoginData }: PostLoginParams) => {
  const { data } = await axiosInstance.post<LoginData>(END_POINTS.LOGIN, LoginData);

  return data;
};
