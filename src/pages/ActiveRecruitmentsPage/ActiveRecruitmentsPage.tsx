import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { Container } from '@/pages/ActiveRecruitmentsPage/ActiveRecruitmentsPage.style';
import { BlankText } from '@/pages/MyProfilePage/MyProfilePage.style';
import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import { FindFriendRoomType } from '@/types/friend';
import { getMainFindFriendList } from '@/api/findFriend/getMainFindFriendList';
import { PATH } from '@/constants/path';

const ActiveRecruitmentsPage = () => {
  const navigate = useNavigate();

  const [requireData, setRequireData] = useState<FindFriendRoomType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const goToPlayGroundRoom = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_ROOM(playgroundId));
  };

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

  return (
    <Container>
      <Header title="모집 중인 모임" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      {isLoading ? (
        <BlankText>데이터를 불러오는 중입니다...</BlankText>
      ) : requireData.length > 0 ? (
        requireData.map((item) => (
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
