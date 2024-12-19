import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { LoginData, LoginRequestBody } from '@/types/user';
import { useAuthStore } from '@/store/authStore';

export interface PostLoginParams {
  LoginData: LoginRequestBody;
}

export const postLogin = async ({ LoginData }: PostLoginParams) => {
  const { data } = await axiosInstance.post<LoginData>(END_POINTS.LOGIN, LoginData, {
    useAuth: false,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // 토큰 저장
  const setAuth = useAuthStore.getState().setAuth;
  setAuth(data.token);

  return data;
};
