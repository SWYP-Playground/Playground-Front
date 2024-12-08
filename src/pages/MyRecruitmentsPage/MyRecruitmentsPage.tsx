import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/pages/MyRecruitmentsPage/MyRecruitmentsPage.style.ts';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';

const MyRecruitmentsPage = () => {
  const navigate = useNavigate();

  const requireData = [
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      description: '안녕하세요 저는 6살 애기 아빠이고, 서초구에서 살..',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      description: '안녕하세요 저는 6살 애기 아빠이고, 서초구에서 살..',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      description: '안녕하세요 저는 6살 애기 아빠이고, 서초구에서 살..',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      description: '안녕하세요 저는 6살 애기 아빠이고, 서초구에서 살..',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
  ];

  return (
    <Container>
      <Header title="내가 모집한 모임" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      <MyGroupsSection requireData={requireData} />
    </Container>
  );
};

export default MyRecruitmentsPage;
