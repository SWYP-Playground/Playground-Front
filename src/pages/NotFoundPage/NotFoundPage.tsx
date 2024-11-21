import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      임시 에러처리 페이지입니다
      <button onClick={() => navigate(PATH.ROOT)}>메인페이지로</button>
    </div>
  );
};

export default NotFoundPage;
