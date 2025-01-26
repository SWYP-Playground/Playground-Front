import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';

import CustomBottomSheet from '@/components/common/BottomSheet/CustomBottomSheet';
import Header from '@components/layout/Header/Header';
import PlayGroundButton from '@/components/playGround/PlayGroundButton/PlayGroundButton';
import PlayGroundSearchBar from '@/components/playGround/PlayGroundSearchBar/PlayGroundSearchBar';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import PlayGroundMap from '@/components/playGround/PlayGroundMap/PlayGroundMap';
import { PlaygroundFlex } from '@/pages/FindPlaygroundFriendPage/FindPlaygroundFriendPage.style';
import PlayGroundItem from '@/components/playGround/PlayGroundItem/PlayGroundItem';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import { usePlaygroundsQuery } from '@/hooks/api/usePlaygroundsQuery';
import { sortByDistance } from '@/utils/sortByDistance';

const FindPlaygroundFriendPage = () => {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState<string>(query || '');
  const { playgroundsData } = query ? usePlaygroundsQuery(query) : { playgroundsData: [] };
  const playgrounds = sortByDistance(playgroundsData);

  const goToBackPage = () => {
    navigate(-1);
  };

  const { isOpen, open, close } = useBottomSheet();

  useEffect(() => {
    query ? open() : close();
  }, [query, open, close]);

  return (
    <PlaygroundFlex direction="column">
      <Header title="놀이터 찾기" leftIcon={<LeftIcon />} onLeftClick={goToBackPage} />
      <Flex style={{ padding: '0 16px' }}>
        <PlayGroundSearchBar query={searchQuery} onSearchChange={setSearchQuery} />
      </Flex>
      <PlayGroundMap playgroundsData={playgrounds} />
      {playgrounds && (
        <CustomBottomSheet isOpen={isOpen} onClose={close} showBackdrop={false}>
          {playgrounds.map((item) => (
            <PlayGroundItem
              key={item.id}
              playgroundId={item.id}
              name={item.name}
              address={item.address}
              distance={item.distance}
            />
          ))}
        </CustomBottomSheet>
      )}
      <PlayGroundButton />
    </PlaygroundFlex>
  );
};

export default FindPlaygroundFriendPage;
