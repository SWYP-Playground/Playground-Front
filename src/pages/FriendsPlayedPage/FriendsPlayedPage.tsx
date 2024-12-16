import { useNavigate } from 'react-router-dom';

import Card from '@/components/common/Card/Card';
import Header from '@/components/layout/Header/Header';
import TemperatureModal from '@/components/temperature/TemperatureModal/TemperatureModal';
import {
  FriendsPlayedFlex,
  Banner,
  FriendsContainer,
} from '@/pages/FriendsPlayedPage/FriendsPlayedPage.style';
import TemperatureButton from '@/components/temperature/TemperatureButton/TemperatureButton';
import { PATH } from '@/constants/path';
import { useCardData } from '@/hooks/mypage/useCardData';
import LeftIcon from '@/assets/svg/left-icon.svg?react';

const FriendsPlayedPage = () => {
  const navigate = useNavigate();
  const cardData = useCardData();

  const goBackToPage = () => {
    navigate(-1);
  };

  const goToFriendMessage = (noteId: string) => () => {
    navigate(PATH.FRIEND_MESSAGE(noteId));
  };

  return (
    <FriendsPlayedFlex>
      <Header title="최근 논 친구" leftIcon={<LeftIcon />} onLeftClick={goBackToPage} />

      <Banner />

      {cardData.map((items) => (
        <FriendsContainer key={items.friendId}>
          <Card
            onClick={goToFriendMessage(items.friendId)}
            nickname={items.nickname}
            status={items.roleType}
            address={items.address}
            image={items.image}
            content={items.introduce}
          />
          <TemperatureModal friendId={items.friendId} nickname={items.nickname}>
            <TemperatureButton />
          </TemperatureModal>
        </FriendsContainer>
      ))}
    </FriendsPlayedFlex>
  );
};

export default FriendsPlayedPage;
