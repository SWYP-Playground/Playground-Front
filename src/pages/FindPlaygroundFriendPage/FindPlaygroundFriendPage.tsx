import CustomBottomSheet from '@/components/common/BottomSheet/CustomBottomSheet';
import Header from '@components/layout/Header/Header';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import RightIcon from '@assets/svg/right-icon.svg?react';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';

const FindPlaygroundFriendPage = () => {
  const { isOpen, open, close } = useBottomSheet();

  return (
    <div>
      <Header title="메인페이지" leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />
      <button onClick={open}>바텀시트 열기</button>
      <CustomBottomSheet isOpen={isOpen} onClose={close}>
        <h2>Bottom Sheet Content</h2>
        <p>여기에 원하는 컨텐츠를 넣을 수 있습니다.</p>
      </CustomBottomSheet>
    </div>
  );
};

export default FindPlaygroundFriendPage;
