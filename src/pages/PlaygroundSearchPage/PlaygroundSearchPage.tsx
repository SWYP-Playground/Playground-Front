import { useNavigate } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import PlayGroundSearchBar from '@/components/playGround/PlayGroundSearchBar/PlayGroundSearchBar';
import Header from '@components/layout/Header/Header';
import CreateRoomIcon from '@assets/svg/create-room.svg?react';
import { PATH } from '@/constants/path';
import PlayGroundItem from '@/components/playGround/PlayGroundItem/PlayGroundItem';
import { PlayGroundItemFlex } from '@/pages/PlaygroundSearchPage/PlaygroundSearchPage.style';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import { useState } from 'react';
import { useDebounce } from '@/hooks/common/useDebounce';
import { usePlaygroundsQuery } from '@/hooks/api/usePlaygroundsQuery';

const PlaygroundSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedPlaygroundWord = useDebounce(searchQuery, 500);
  const { playgroundsData } = usePlaygroundsQuery(debouncedPlaygroundWord);
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
        <PlayGroundSearchBar onSearchChange={setSearchQuery} />
      </Flex>
      <PlayGroundItemFlex>
        {playgroundsData.map((item) => (
          <PlayGroundItem name={item.name} address={item.address} />
        ))}
      </PlayGroundItemFlex>
    </Flex>
  );
};

export default PlaygroundSearchPage;
