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

const MainPage = () => {
  const navigate = useNavigate();
  const requireData = [
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      playgroundName: '서리풀 놀이터 ·',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      playgroundName: '서리풀 놀이터 ·',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      playgroundName: '서리풀 놀이터 ·',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
  ];

  const cardData = [
    {
      nickname: '닉네임',
      status: '아빠',
      address: '서울시 노원구 중계동',
      image:
        'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
      content: '안녕하세요 저는 6살 애기 아빠이고, 중계동에서 살고 있어요. 잘 부탁드립니다.',
    },
    {
      nickname: '닉네임',
      status: '아빠',
      address: '서울시 노원구 중계동',
      image:
        'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
      content: '안녕하세요 저는 6살 애기 아빠이고, 중계동에서 살고 있어요. 잘 부탁드립니다.',
    },
    {
      nickname: '닉네임',
      status: '아빠',
      address: '서울시 노원구 중계동',
      image:
        'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
      content: '안녕하세요 저는 6살 애기 아빠이고, 중계동에서 살고 있어요. 잘 부탁드립니다.',
    },
  ];

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
      {cardData.map((items) => (
        <Card
          nickname={items.nickname}
          status={items.status}
          address={items.address}
          image={items.image}
          content={items.content}
        />
      ))}
    </Container>
  );
};

export default MainPage;
