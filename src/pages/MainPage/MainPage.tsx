import Header from '@/components/layout/Header/Header.tsx';
import {
  Container,
  Banner,
  Logo,
  TitleContainer,
  TitleText,
  ViewMore,
} from '@/pages/MainPage/MainPage.style.ts';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path.ts';
import Card from '@/components/common/Card/Card';
import { useCardData } from '@/hooks/mypage/useCardData';
import { FindFriendRoomType } from '@/types/friend';

const requireData: FindFriendRoomType[] = [
  {
    findFriendId: 3,
    playgroundName: '서울 식물원 숲 문화학교 앞 놀이터',
    title: '문화학교 앞 놀이터에서 놀사람 구해요',
    description: '같이 놀 사람 구합니다',
    scheduleTime: '2024. 12. 15 일요일 오후 5:00~오후 6:00',
    recruitmentStatus: 'COMPLETE',
    currentCount: 1,
  },
  {
    findFriendId: 2,
    playgroundName: '서울숲 유아숲 체험원',
    title: '서울숲에서 놀사람 구합니다',
    description: '구합니다 놀 사람',
    scheduleTime: '2024. 12. 15 일요일 오후 10:08~오전 12:08',
    recruitmentStatus: 'COMPLETE',
    currentCount: 2,
  },
  {
    findFriendId: 1,
    playgroundName: '서리풀 상상나라 숲속학교 놀이터',
    title: '바다육지 할 분~~~~~',
    description: '오늘 학원 쨌습니다.',
    scheduleTime: '2024. 12. 10 화요일 오후 5:30~오후 6:00',
    recruitmentStatus: 'COMPLETE',
    currentCount: 1,
  },
];

const MainPage = () => {
  const navigate = useNavigate();
  const cardData = useCardData();

  return (
    <Container>
      <Header leftIcon={<Logo />} />
      <Banner />

      <TitleContainer>
        <TitleText>모집 중인 모임</TitleText>
        <ViewMore onClick={() => navigate(PATH.MY_RECRUITMENTS('1'))}>더보기</ViewMore>
      </TitleContainer>
      <MyGroupsSection requireData={requireData} />

      <TitleContainer>
        <TitleText>새로운 친구</TitleText>
        <ViewMore onClick={() => navigate(PATH.FRIENDS_PLAYED('1'))}>더보기</ViewMore>
      </TitleContainer>
      {cardData.map((item) => (
        <Card
          nickname={item.nickname}
          status={item.roleType}
          address={item.address}
          image={item.image}
          content={item.introduce}
        />
      ))}
    </Container>
  );
};

export default MainPage;
