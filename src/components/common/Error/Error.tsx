import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/constants/api';
// import { useTokenError } from '@/hooks/member/useTokenError';
import { hasKeyInObject } from '@/utils/typeGuard';
import { ErrorButton, ErrorFlex, ErrorMessage } from '@/components/common/Error/Error.style';
import LogoIcon from '@/assets/svg/logo-vertical.svg?react';

export interface ErrorProps {
  statusCode?: number;
  errorCode?: number;
  resetError?: () => void;
}

const Error = ({ statusCode = HTTP_STATUS_CODE.NOT_FOUND, errorCode, resetError }: ErrorProps) => {
  const currentStatusCode =
    statusCode === HTTP_STATUS_CODE.CONTENT_TOO_LARGE ? HTTP_STATUS_CODE.BAD_REQUEST : statusCode;
  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, currentStatusCode);

  // const { handleTokenError } = useTokenError();

  console.log(errorCode, isHTTPError);

  // if (!isHTTPError) return null;

  return (
    <ErrorFlex>
      <LogoIcon width="200px" height="200px" />
      <ErrorMessage>오류가 발생하였습니다!</ErrorMessage>
      <ErrorButton onClick={resetError}>에러 리셋하기</ErrorButton>
    </ErrorFlex>
  );
};

export default Error;
