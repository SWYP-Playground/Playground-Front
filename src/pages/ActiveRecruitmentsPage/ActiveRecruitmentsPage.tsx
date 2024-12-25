import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { Container } from '@/pages/ActiveRecruitmentsPage/ActiveRecruitmentsPage.style';
import { BlankText } from '@/pages/MyProfilePage/MyProfilePage.style';
import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import { PATH } from '@/constants/path';
import { useMainFindFriendListQuery } from '@/hooks/api/useMainFindFriendListQuery';

const ActiveRecruitmentsPage = () => {
  const navigate = useNavigate();
  const { MainFindFriendListData } = useMainFindFriendListQuery();
  const recruitingData = MainFindFriendListData.filter(
    (item) => item.recruitmentStatus === 'RECRUITING',
  );

  const goToPlayGroundRoom = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_ROOM(playgroundId));
  };

  return (
    <Container>
      <Header title="모집 중인 모임" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
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
    </Container>
  );
};

export default ActiveRecruitmentsPage;
