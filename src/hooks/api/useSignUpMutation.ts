import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import { postSignUp } from '@/api/user/postSignUp';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useSignUpMutation = () => {
  const signUpMutation = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => {
      // 회원가입 성공시에 로직 추가해야 함
    },
    onError: () => {
      toast('회원가입에 실패했습니다. 잠시 후 다시 시도해 주세요');
    },
  });

  return signUpMutation;
};
