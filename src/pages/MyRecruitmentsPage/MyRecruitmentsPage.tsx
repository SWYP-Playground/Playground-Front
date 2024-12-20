import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { Container } from '@/pages/MyRecruitmentsPage/MyRecruitmentsPage.style';
import { BlankText } from '@/pages/MyProfilePage/MyProfilePage.style';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
import { FindFriendRoomType } from '@/types/friend';
import { getMyFindFriendList } from '@/api/findFriend/getMyFindFriendList';

const MyRecruitmentsPage = () => {
  const navigate = useNavigate();

  const [requireData, setRequireData] = useState<FindFriendRoomType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMyRecruitments = async () => {
      try {
        setIsLoading(true);
        const response = await getMyFindFriendList();

        setRequireData(
          response.data.map((item) => ({
            findFriendId: item.findFriendId,
            playgroundName: item.playgroundName,
            title: item.title,
            description: item.description,
            scheduleTime: item.scheduleTime,
            recruitmentStatus: item.recruitmentStatus,
            currentCount: item.currentCount,
          })),
        );
      } catch (err) {
        console.error('내가 모집한 모임 데이터를 불러오는 중 오류 발생:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyRecruitments();
  }, []);

  return (
    <Container>
      <Header title="내가 모집한 모임" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      {isLoading ? (
        <BlankText>데이터를 불러오는 중입니다...</BlankText>
      ) : requireData.length > 0 ? (
        <MyGroupsSection requireData={requireData} />
      ) : (
        <BlankText>내가 모집한 모임이 없습니다.</BlankText>
      )}
    </Container>
  );
};

export default MyRecruitmentsPage;
