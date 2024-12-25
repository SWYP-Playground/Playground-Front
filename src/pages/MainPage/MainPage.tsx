import { useNavigate } from 'react-router-dom';

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
import { PATH } from '@/constants/path.ts';
import Card from '@/components/common/Card/Card';
import { useRecentFriendQuery } from '@/hooks/api/useRecentFriendQuery';
import { useMainFindFriendListQuery } from '@/hooks/api/useMainFindFriendListQuery';

const MainPage = () => {
  const navigate = useNavigate();
  const { MainFindFriendListData } = useMainFindFriendListQuery();
  const { RecentFriendData } = useRecentFriendQuery();
  const recruitingData = MainFindFriendListData.filter(
    (item) => item.recruitmentStatus === 'RECRUITING',
  );

  return (
    <Container>
      <Header leftIcon={<Logo />} />
      <Banner />

      <TitleContainer>
        <TitleText>모집 중인 모임</TitleText>
        {/* <ViewMore onClick={() => navigate(PATH.ACTIVE_RECRUITMENTS('1'))}>더보기</ViewMore> */}
      </TitleContainer>
      {recruitingData.length > 0 ? (
        <MyGroupsSection requireData={recruitingData} />
      ) : (
        <BlankText>모집 중인 모임이 없습니다.</BlankText>
      )}

      <TitleContainer>
        <TitleText>최근 논 친구</TitleText>
        <ViewMore onClick={() => navigate(PATH.FRIENDS_PLAYED)}>더보기</ViewMore>
      </TitleContainer>
      {RecentFriendData.length > 0 ? (
        RecentFriendData.map((friend) => (
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
