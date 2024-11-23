import { PropsWithChildren, useLayoutEffect } from 'react';

import useLoggedInStore from '@/store/auth';
import { ACCESS_TOKEN_KEY } from '@/constants/api';

interface LogInProps extends PropsWithChildren {}

const Login = ({ children }: LogInProps) => {
  const setIsLoggedIn = useLoggedInStore((state) => state.setIsLoggedIn);

  useLayoutEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return <>{children}</>;
};

export default Login;
