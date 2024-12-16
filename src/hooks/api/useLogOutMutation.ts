import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postLogout } from '@/api/user/postLogout';
import { PATH } from '@/constants/path';

// API 명세서 보고 코드를 짠거라 제대로 작동 안할 수 있습니다. 나중에 수정 필요
export const useLogOutMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logOutMutation = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      // 로그아웃 성공시에 로직 추가해야 함
      queryClient.clear();
      navigate(PATH.ROOT);
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return logOutMutation;
};
