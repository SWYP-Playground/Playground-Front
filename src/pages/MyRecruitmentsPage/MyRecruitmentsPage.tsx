import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { Container } from '@/pages/MyRecruitmentsPage/MyRecruitmentsPage.style';
import { BlankText } from '@/pages/MyProfilePage/MyProfilePage.style';
import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import { PATH } from '@/constants/path';
import { useMyFindFriendListQuery } from '@/hooks/api/useMyFindFriendListQuery';

const MyRecruitmentsPage = () => {
  const navigate = useNavigate();
  const { MyFindFriendListData } = useMyFindFriendListQuery();

  const goToPlayGroundRoom = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_ROOM(playgroundId));
  };

  return (
    <Container>
      <Header title="내가 모집한 모임" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      {MyFindFriendListData.length > 0 ? (
        MyFindFriendListData.map((item) => (
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
        <BlankText>내가 모집한 모임이 없습니다.</BlankText>
      )}
    </Container>
  );
};

export default MyRecruitmentsPage;
