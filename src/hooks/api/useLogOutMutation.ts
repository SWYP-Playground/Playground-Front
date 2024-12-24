import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postLogout } from '@/api/user/postLogout';
import { PATH } from '@/constants/path';

export const useLogOutMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logOutMutation = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      queryClient.clear();
      navigate(PATH.SIGNIN);
    },
    onError: (error) => {
      toast.error('로그아웃에 실패했습니다. 다시 시도해주세요.');
      console.error(error);
    },
  });

  return logOutMutation;
};
