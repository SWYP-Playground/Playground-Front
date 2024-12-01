import { PlayGroundButtonStyling } from '@/components/playGround/PlayGroundButton/PlayGroundButton.style';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

const PlayGroundButton = () => {
  const navigate = useNavigate();

  const goToCreatePlaygroundPage = () => {
    navigate(PATH.CREATE_PLAYGROUND);
  };

  return (
    <PlayGroundButtonStyling onClick={goToCreatePlaygroundPage}>
      모집글 등록하기
    </PlayGroundButtonStyling>
  );
};

export default PlayGroundButton;
