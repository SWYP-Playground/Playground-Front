import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header/Header.tsx';
import {
  Container,
  Banner,
  Logo,
  TitleContainer,
  TitleText,
  ViewMore,
  BlankText,
} from '@/pages/MainPage/MainPage.style.ts';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path.ts';
import Card from '@/components/common/Card/Card';
import { FindFriendRoomType, RecentFriendType } from '@/types/friend';
import { getMainFindFriendList } from '@/api/findFriend/getMainFindFriendList';
import { getRecentFriend } from '@/api/findFriend/getRecentFriend';

const MainPage = () => {
  const navigate = useNavigate();
  const [requireData, setRequireData] = useState<FindFriendRoomType[]>([]);
  const [recentFriends, setRecentFriends] = useState<RecentFriendType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 모집 중인 모임
  useEffect(() => {
    const fetchFindFriendList = async () => {
      try {
        const data = await getMainFindFriendList();
        const recruitingData = data.filter((item) => item.recruitmentStatus === 'RECRUITING');
        setRequireData(recruitingData);
      } catch (error) {
        console.error('모집 중인 모임 데이터를 불러오는 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFindFriendList();
  }, []);

  // 새로운 친구
  useEffect(() => {
    const fetchRecentFriends = async () => {
      try {
        const data = await getRecentFriend();
        setRecentFriends(data.data);
      } catch (error) {
        console.error('새로운 친구 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchRecentFriends();
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <Container>
      <Header leftIcon={<Logo />} />
      <Banner />

      <TitleContainer>
        <TitleText>모집 중인 모임</TitleText>
        <ViewMore onClick={() => navigate(PATH.ACTIVE_RECRUITMENTS('1'))}>더보기</ViewMore>
      </TitleContainer>
      {requireData.length > 0 ? (
        <MyGroupsSection requireData={requireData} />
      ) : (
        <BlankText>모집 중인 모임이 없습니다.</BlankText>
      )}

      <TitleContainer>
        <TitleText>새로운 친구</TitleText>
        <ViewMore onClick={() => navigate(PATH.FRIENDS_PLAYED('1'))}>더보기</ViewMore>
      </TitleContainer>
      {recentFriends.length > 0 ? (
        recentFriends.map((friend) => (
          <Card
            key={friend.nickname}
            nickname={friend.nickname}
            status={friend.roleType}
            address={friend.address}
            image={friend.profileImg || ''}
            content={friend.introduce}
          />
        ))
      ) : (
        <BlankText>새로운 친구가 없습니다.</BlankText>
      )}
    </Container>
  );
};

export default MainPage;
