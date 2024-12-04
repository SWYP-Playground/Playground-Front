import { useNavigate } from 'react-router-dom';

import CustomBottomSheet from '@/components/common/BottomSheet/CustomBottomSheet';
import TextInput from '@/components/common/TextInput/TextInput';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import {
  PlayGroundRoomFlex,
  SendMessageButton,
  BottomSheetTitle,
} from '@/pages/PlaygroundMessagePage/PlaygroundMessagePage.style';
import Header from '@/components/layout/Header/Header';
import Card from '@/components/common/Card/Card';
import LeftIcon from '@assets/svg/left-icon.svg?react';

const cardData = [
  {
    nickname: '닉네임',
    status: '아빠',
    address: '서울시 노원구 중계동',
    image:
      'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
    content: '쪽지 내용입니다.',
  },
];

const PlaygroundMessagePage = () => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useBottomSheet();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <PlayGroundRoomFlex>
      <Header
        title="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세"
        leftIcon={<LeftIcon />}
        onLeftClick={goToBack}
      />
      {cardData.map((items) => (
        <Card
          nickname={items.nickname}
          status={items.status}
          address={items.address}
          image={items.image}
          content={items.content}
        />
      ))}
      <SendMessageButton onClick={open}>쪽지 보내기</SendMessageButton>
      <CustomBottomSheet isOpen={isOpen} onClose={close}>
        <BottomSheetTitle>쪽지 작성</BottomSheetTitle>
        <TextInput placeholder="내용을 입력해 주세요." buttonLabel="보내기" />
      </CustomBottomSheet>
    </PlayGroundRoomFlex>
  );
};

export default PlaygroundMessagePage;
