import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import { FriendMessageFlex } from '@/pages/FriendMessagePage/FriendMessagePage.style';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import Card from '@/components/common/Card/Card';

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

const FriendMessagePage = () => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <FriendMessageFlex>
      <Header title="쪽지 내용" leftIcon={<LeftIcon />} onLeftClick={goToBack} />
      {cardData.map((items) => (
        <Card
          nickname={items.nickname}
          status={items.status}
          address={items.address}
          image={items.image}
          content={items.content}
        />
      ))}
    </FriendMessageFlex>
  );
};

export default FriendMessagePage;
