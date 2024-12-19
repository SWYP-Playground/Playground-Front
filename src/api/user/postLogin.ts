import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';
import { LoginData, LoginRequestBody } from '@/types/user';
import { useAuthStore } from '@/store/authStore';

export interface PostLoginParams {
  LoginData: LoginRequestBody;
}

export const postLogin = async ({ LoginData }: PostLoginParams): Promise<LoginData> => {
  const { data } = await axiosInstance.post<LoginData>(END_POINTS.LOGIN, LoginData, {
    useAuth: false,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  localStorage.setItem(
    'auth-storage',
    JSON.stringify({
      state: { token: data.token },
      version: 0,
    }),
  );

  const setAuth = useAuthStore.getState().setAuth;
  setAuth(data.token);

  return data;
};
