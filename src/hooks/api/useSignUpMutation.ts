import { useMutation } from '@tanstack/react-query';
import { postSignUp } from '@/api/user/postSignUp';
import { useSignUpStore } from '@/store/signUpStore';

export const useSignUpMutation = () => {
  const { setSignUpData } = useSignUpStore();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      return await postSignUp(formData);
    },

    onSuccess: (response) => {
      console.log('✅ 회원가입 성공:', response);

      // Zustand 상태 업데이트
      setSignUpData({
        name: response.name,
        email: response.email,
      });

      // localStorage에 전체 데이터 저장
      localStorage.setItem('user', JSON.stringify(response));
      console.log('🔒 Full user data saved to localStorage:', response);
    },

    onError: (error) => {
      console.error('❌ 회원가입 실패:', error);
    },
  });
};

export default useSignUpMutation;
