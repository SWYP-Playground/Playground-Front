import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/constants/api';
// import { useTokenError } from '@/hooks/member/useTokenError';
import { hasKeyInObject } from '@/utils/typeGuard';

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

  console.log(errorCode);

  if (!isHTTPError) return null;

  return (
    <>
      <button onClick={resetError}>에러 리셋하기</button>
    </>
  );
};

export default Error;
