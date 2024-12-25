import { useNavigate } from 'react-router-dom';

import Card from '@/components/common/Card/Card';
import Header from '@/components/layout/Header/Header';
import TemperatureModal from '@/components/temperature/TemperatureModal/TemperatureModal';
import {
  FriendsPlayedFlex,
  FriendsContainer,
} from '@/pages/FriendsPlayedPage/FriendsPlayedPage.style';
import { BlankText } from '@/pages/MyProfilePage/MyProfilePage.style';
import TemperatureButton from '@/components/temperature/TemperatureButton/TemperatureButton';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { useRecentFriendQuery } from '@/hooks/api/useRecentFriendQuery';

const FriendsPlayedPage = () => {
  const navigate = useNavigate();
  const { RecentFriendData } = useRecentFriendQuery();

  const goBackToPage = () => {
    navigate(-1);
  };

  return (
    <FriendsPlayedFlex>
      <Header title="최근 논 친구" leftIcon={<LeftIcon />} onLeftClick={goBackToPage} />

      {RecentFriendData.length > 0 ? (
        RecentFriendData.map((items, index) => (
          <FriendsContainer key={index}>
            <Card
              nickname={items.nickname}
              status={items.roleType}
              address={items.address}
              image={items.profileImg}
              content={items.introduce}
            />
            <TemperatureModal nickname={items.nickname}>
              <TemperatureButton />
            </TemperatureModal>
          </FriendsContainer>
        ))
      ) : (
        <BlankText>최근 논 친구가 없습니다.</BlankText>
      )}
    </FriendsPlayedFlex>
  );
};

export default FriendsPlayedPage;
