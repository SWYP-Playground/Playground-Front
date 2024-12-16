import { useNavigate, useSearchParams } from 'react-router-dom';

import PlayGroundSearchBar from '@/components/playGround/PlayGroundSearchBar/PlayGroundSearchBar';
import Header from '@components/layout/Header/Header';
import CreateRoomIcon from '@assets/svg/create-room.svg?react';
import { PATH } from '@/constants/path';
import PlayGroundItem from '@/components/playGround/PlayGroundItem/PlayGroundItem';
import {
  PageContainer,
  PlayGroundItemFlex,
  SearchBarWrapper,
} from '@/pages/PlaygroundSearchPage/PlaygroundSearchPage.style';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import { useState } from 'react';
import { useDebounce } from '@/hooks/common/useDebounce';
import { usePlaygroundsQuery } from '@/hooks/api/usePlaygroundsQuery';

const PlaygroundSearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedPlaygroundWord = useDebounce(searchQuery, 500);
  const { playgroundsData } = usePlaygroundsQuery(debouncedPlaygroundWord || query || '');
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate(-1);
  };

  const goToCreatePlayground = () => {
    navigate(PATH.CREATE_PLAYGROUND);
  };

  return (
    <PageContainer>
      <Header
        title="놀이터 찾기"
        leftIcon={<LeftIcon />}
        onLeftClick={goToBackPage}
        rightIcon={<CreateRoomIcon width="100px" height="30px" />}
        onRightClick={goToCreatePlayground}
      />
      <SearchBarWrapper>
        <PlayGroundSearchBar onSearchChange={setSearchQuery} />
      </SearchBarWrapper>
      <PlayGroundItemFlex>
        {playgroundsData &&
          playgroundsData.map((item) => (
            <PlayGroundItem
              key={item.id}
              playgroundId={item.id}
              name={item.name}
              address={item.address}
              distance={item.distance}
            />
          ))}
      </PlayGroundItemFlex>
    </PageContainer>
  );
};

export default PlaygroundSearchPage;
