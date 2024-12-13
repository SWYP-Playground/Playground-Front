import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import CancelIcon from '@assets/svg/cancel.svg?react';
import PlayGroundForm from '@/components/playGround/PlayGroundForm/PlayGroundForm';
import { CreatePlaygroundFlex } from '@/pages/CreatePlaygroundPage/CreatePlaygroundPage.style';

const CreatePlaygroundPage = () => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate(-1);
  };

  return (
    <CreatePlaygroundFlex direction="column">
      <Header
        title="모집글 등록"
        leftIcon={<LeftIcon />}
        onLeftClick={goToBackPage}
        rightIcon={<CancelIcon />}
        onRightClick={goToBackPage}
      />
      <PlayGroundForm />
    </CreatePlaygroundFlex>
  );
};

export default CreatePlaygroundPage;
