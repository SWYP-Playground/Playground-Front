import { useEffect, useState } from 'react';
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
import { FindFriendRoomType } from '@/types/friend';
import { getMainFindFriendList } from '@/api/findFriend/getMainFindFriendList';

const MainPage = () => {
  const navigate = useNavigate();
  const [requireData, setRequireData] = useState<FindFriendRoomType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

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
    </Container>
  );
};

export default MainPage;
