import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import { postLogin } from '@/api/user/postLogin';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useLogInMutation = () => {
  const logInMutation = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      // 로그인 성공시에 로직 추가해야 함
    },
    onError: () => {
      toast('로그인에 실패했습니다. 잠시 후 다시 시도해 주세요');
    },
  });

  return logInMutation;
};
