import { useEffect } from 'react';
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

const playgroundData = [
  {
    name: '서리풀 상상나라 숲속학교 놀이터',
    address: '서울 서초구 서초대로 160-7',
    distance: '1.1',
  },
  {
    name: '도구머리 숲 놀이터',
    address: '서울 서초구 강남대로 221 5층 공원녹지과',
    distance: '1.1',
  },
  {
    name: '서초그랑자이 기부채납공원 내 놀이터',
    address: '서울 서초구 효령로 391',
    distance: '1.1',
  },
];

const FindPlaygroundFriendPage = () => {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const query = searchParams.get('query');

  const goToBackPage = () => {
    navigate(-1);
  };

  const { isOpen, open, close } = useBottomSheet();

  useEffect(() => {
    if (query) {
      open();
    }
  }, [query]);

  return (
    <PlaygroundFlex direction="column">
      <Header title="놀이터 찾기" leftIcon={<LeftIcon />} onLeftClick={goToBackPage} />
      <Flex style={{ padding: '0 16px' }}>
        <PlayGroundSearchBar />
      </Flex>
      <CustomBottomSheet isOpen={isOpen} onClose={close} showBackdrop={false}>
        {playgroundData.map((item) => (
          <PlayGroundItem name={item.name} address={item.address} distance={item.distance} />
        ))}
      </CustomBottomSheet>
      <PlayGroundMap />
      <PlayGroundButton />
    </PlaygroundFlex>
  );
};

export default FindPlaygroundFriendPage;
