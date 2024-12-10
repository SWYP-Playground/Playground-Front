import { useNavigate } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import PlayGroundSearchBar from '@/components/playGround/PlayGroundSearchBar/PlayGroundSearchBar';
import Header from '@components/layout/Header/Header';
import CreateRoomIcon from '@assets/svg/create-room.svg?react';
import { PATH } from '@/constants/path';
import PlayGroundItem from '@/components/playGround/PlayGroundItem/PlayGroundItem';
import { PlayGroundItemFlex } from '@/pages/PlaygroundSearchPage/PlaygroundSearchPage.style';
import LeftIcon from '@assets/svg/left-icon.svg?react';

const playgroundData = [
  {
    name: '서리풀 상상나라 숲속학교 놀이터',
    address: '서울 서초구 서초대로 160-7',
  },
  {
    name: '도구머리 숲 놀이터',
    address: '서울 서초구 강남대로 221 5층 공원녹지과',
  },
  {
    name: '서초그랑자이 기부채납공원 내 놀이터',
    address: '서울 서초구 효령로 391',
  },
];

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
      <Flex style={{ padding: '16px' }}>
        <PlayGroundSearchBar />
      </Flex>
      <PlayGroundItemFlex>
        {playgroundData.map((item) => (
          <PlayGroundItem name={item.name} address={item.address} />
        ))}
      </PlayGroundItemFlex>
    </Flex>
  );
};

export default PlaygroundSearchPage;
