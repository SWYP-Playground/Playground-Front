import { useNavigate } from 'react-router-dom';

import CustomBottomSheet from '@/components/common/BottomSheet/CustomBottomSheet';
import Header from '@components/layout/Header/Header';
import PlayGroundButton from '@/components/playGround/PlayGroundButton/PlayGroundButton';
import PlayGroundSearchBar from '@/components/playGround/PlayGroundSearchBar/PlayGroundSearchBar';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import PlayGroundMap from '@/components/playGround/PlayGroundMap/PlayGroundMap';
import { PlaygroundFlex } from '@/pages/FindPlaygroundFriendPage/FindPlaygroundFriendPage.style';

const FindPlaygroundFriendPage = () => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate(-1);
  };

  const { isOpen, open, close } = useBottomSheet();

  return (
    <PlaygroundFlex direction="column">
      <Header title="놀이터 찾기" leftIcon={<LeftIcon />} onLeftClick={goToBackPage} />
      <PlayGroundSearchBar />
      <button onClick={open}>바텀시트 열기</button>
      <CustomBottomSheet isOpen={isOpen} onClose={close}>
        <h2>Bottom Sheet Content</h2>
        <p>여기에 원하는 컨텐츠를 넣을 수 있습니다.</p>
      </CustomBottomSheet>
      <PlayGroundMap />
      <PlayGroundButton />
    </PlaygroundFlex>
  );
};

export default FindPlaygroundFriendPage;
