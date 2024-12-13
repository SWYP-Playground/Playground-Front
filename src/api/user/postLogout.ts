import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { LoginData } from '@/types/user';

export const postLogout = async () => {
  const { data } = await axiosInstance.post<LoginData>(END_POINTS.LOGOUT);

  return data;
};
