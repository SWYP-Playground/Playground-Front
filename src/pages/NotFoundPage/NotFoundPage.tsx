import { useNavigate } from 'react-router-dom';

import { ErrorButton, ErrorFlex, ErrorMessage } from '@/components/common/Error/Error.style';
import { PATH } from '@/constants/path';
import LogoIcon from '@/assets/svg/logo-vertical.svg?react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <ErrorFlex>
      <LogoIcon width="200px" height="200px" />
      <ErrorMessage>페이지가 존재하지 않습니다!</ErrorMessage>
      <ErrorButton onClick={() => navigate(PATH.ROOT)}>메인페이지로</ErrorButton>
    </ErrorFlex>
  );
};

export default NotFoundPage;
