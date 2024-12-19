import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import { postLogin } from '@/api/user/postLogin';
import { useAuthStore } from '@/store/authStore';
import { LoginRequestBody, LoginData } from '@/types/user';

import { UseMutationResult } from '@tanstack/react-query';

export const useLogInMutation = (): UseMutationResult<LoginData, Error, LoginRequestBody> => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation<LoginData, Error, LoginRequestBody>({
    mutationFn: (loginData: LoginRequestBody) => postLogin({ LoginData: loginData }),
    onSuccess: (data: LoginData) => {
      setAuth({
        token: data.token,
        refreshToken: data.refreshToken,
      });

      toast.success('로그인 성공!');
    },
    onError: (error) => {
      console.error('로그인 에러:', error);
      toast.error('로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.');
    },
  });
};
