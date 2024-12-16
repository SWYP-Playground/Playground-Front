import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/pages/MyRecruitmentsPage/MyRecruitmentsPage.style.ts';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
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

const MyRecruitmentsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header title="내가 모집한 모임" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      <MyGroupsSection requireData={requireData} />
    </Container>
  );
};

export default MyRecruitmentsPage;
