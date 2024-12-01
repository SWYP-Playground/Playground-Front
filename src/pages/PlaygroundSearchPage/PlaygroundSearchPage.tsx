import { useNavigate } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import PlayGroundSearchBar from '@/components/playGround/PlayGroundSearchBar/PlayGroundSearchBar';
import Header from '@components/layout/Header/Header';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import CreateRoomIcon from '@assets/svg/create-room.svg?react';
import { PATH } from '@/constants/path';

const PlaygroundSearchPage = () => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate(-1);
  };

  const goToCreatePlayground = () => {
    navigate(PATH.CREATE_PLAYGROUND);
  };

  return (
    <Flex direction="column">
      <Header
        title="놀이터 찾기"
        leftIcon={<LeftIcon />}
        onLeftClick={goToBackPage}
        rightIcon={<CreateRoomIcon width="100px" height="30px" />}
        onRightClick={goToCreatePlayground}
      />
      <PlayGroundSearchBar />
    </Flex>
  );
};

export default PlaygroundSearchPage;
