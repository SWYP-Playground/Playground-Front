import { useNavigate } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import Header from '@/components/layout/Header/Header';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import CancelIcon from '@assets/svg/cancel.svg?react';

const CreatePlaygroundPage = () => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate(-1);
  };

  return (
    <Flex direction="column">
      <Header
        title="모집글 등록"
        leftIcon={<LeftIcon />}
        onLeftClick={goToBackPage}
        rightIcon={<CancelIcon />}
        onRightClick={goToBackPage}
      />
    </Flex>
  );
};

export default CreatePlaygroundPage;
