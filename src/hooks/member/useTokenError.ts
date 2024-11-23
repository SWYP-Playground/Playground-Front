import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { PATH } from '@/constants/path';
import useLoggedInStore from '@/store/auth';

export const useTokenError = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const setIsLoggedIn = useLoggedInStore((state) => state.setIsLoggedIn);

  const handleTokenError = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    queryClient.clear();
    setIsLoggedIn(false);
    navigate(PATH.ROOT);

    toast('다시 로그인해 주세요.');

    return { handleTokenError };
  };
};
