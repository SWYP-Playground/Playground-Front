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
import { PATH } from '@/constants/path.ts';
import Card from '@/components/common/Card/Card';
import { useRecentFriendQuery } from '@/hooks/api/useRecentFriendQuery';
import { useMainFindFriendListQuery } from '@/hooks/api/useMainFindFriendListQuery';
import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';

const MainPage = () => {
  const navigate = useNavigate();
  const { MainFindFriendListData } = useMainFindFriendListQuery();
  const { RecentFriendData } = useRecentFriendQuery();
  const recruitingData = MainFindFriendListData.filter(
    (item) => item.recruitmentStatus === 'RECRUITING',
  );

  const goToPlayGroundRoom = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_ROOM(playgroundId));
  };

  return (
    <Container>
      <Header leftIcon={<Logo />} />
      <Banner />

      <TitleContainer>
        <TitleText>모집 중인 모임</TitleText>
        <ViewMore onClick={() => navigate(PATH.ACTIVE_RECRUITMENTS('1'))}>더보기</ViewMore>
      </TitleContainer>
      {recruitingData.length > 0 ? (
        recruitingData.map((item) => (
          <RequirementRoom
            key={item.findFriendId}
            onClick={goToPlayGroundRoom(String(item.findFriendId))}
            title={item.title}
            description={item.description}
            status={item.recruitmentStatus}
            currentCount={item.currentCount}
            playTime={item.scheduleTime}
            playgroundName={item.playgroundName}
          />
        ))
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
