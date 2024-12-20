import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/common/Card/Card';
import Header from '@/components/layout/Header/Header';
import TemperatureModal from '@/components/temperature/TemperatureModal/TemperatureModal';
import {
  FriendsPlayedFlex,
  Banner,
  FriendsContainer,
} from '@/pages/FriendsPlayedPage/FriendsPlayedPage.style';
import { BlankText } from '@/pages/ProfilePage/ProfilePage.style.ts';
import TemperatureButton from '@/components/temperature/TemperatureButton/TemperatureButton';
import { PATH } from '@/constants/path';
import { getRecentFriend } from '@/api/findFriend/getRecentFriend';
import { getNote } from '@/api/note/getNote';
import getDecodedTokenData from '@/utils/getDecodedTokenData';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { RecentFriendType } from '@/types/friend';

const FriendsPlayedPage = () => {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState<RecentFriendType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecentFriends = async () => {
      try {
        setIsLoading(true);
        const response = await getRecentFriend();
        setCardData(response.data);
      } catch (err) {
        console.error('최근 논 친구 데이터를 불러오는 중 오류 발생:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentFriends();
  }, []);

  const goBackToPage = () => {
    navigate(-1);
  };

  const goToFriendMessage = async () => {
    try {
      const { parentId } = getDecodedTokenData();
      if (!parentId) throw new Error('parentId가 없습니다.');

      const noteResponse = await getNote(Number(parentId));
      const noteId = noteResponse.noteId;

      navigate(PATH.FRIEND_MESSAGE(String(noteId)));
    } catch (err) {
      console.error('메시지 데이터를 가져오는 중 오류 발생:', err);
    }
  };

  return (
    <FriendsPlayedFlex>
      <Header title="최근 논 친구" leftIcon={<LeftIcon />} onLeftClick={goBackToPage} />
      <Banner />

      {isLoading ? (
        <BlankText>데이터를 불러오는 중입니다...</BlankText>
      ) : cardData.length > 0 ? (
        cardData.map((items, index) => (
          <FriendsContainer key={index}>
            <Card
              onClick={() => goToFriendMessage()}
              nickname={items.nickname}
              status={items.roleType}
              address={items.address}
              image={items.profileImg}
              content={items.introduce}
            />
            <TemperatureModal friendId={index.toString()} nickname={items.nickname}>
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
