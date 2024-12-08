import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import {
  Container,
  Background,
  TitleText,
  ViewMore,
  ContactUsContainer,
  TitleContainer,
  RecentFriendsContainer,
} from './ProfilePage.style.ts';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import ProfileDetails from '@/components/profile/MyPage/ProfileDetailSection.tsx';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
import ContactUsSection from '@/components/profile/MyPage/ContactUsSection.tsx';
import Card from '@/components/common/Card/Card.tsx';
import SettingButton from '@/components/profile/Button/SettingButton.tsx';

const ProfilePage = () => {
  const navigate = useNavigate();

  const progress = 70;

  const children: { name: string; gender: 'female' | 'male' }[] = [
    { name: '아이1', gender: 'female' },
    { name: '아이2', gender: 'male' },
  ];

  const requireData = [
    {
      playgroundId: '25',
      status: '모집 중',
      currentCount: 2,
      title: '내일 서리풀 놀이터에서 놀 친구 구해요',
      description: '안녕하세요 저는 6살 애기 아빠이고, 서초구에서 살..',
      playTime: '11.24 금요일·오후 3:00~4:00',
    },
  ];

  const recentFriends = [
    {
      nickname: '닉네임1',
      status: '아빠',
      address: '서울시 노원구 중계동',
      image: 'https://via.placeholder.com/150',
      content: '안녕하세요!',
    },
  ];

  return (
    <Container>
      <Background>
        <Header
          title="내정보"
          leftIcon={<LeftIcon />}
          rightIcon={<SettingButton />}
          onRightClick={() => navigate(PATH.USER_SETTING('1'))}
        />
        <ProfileDetails progress={progress} children={children} showButtons={true} />
      </Background>

      <TitleContainer>
        <TitleText>내가 모집한 모임</TitleText>
        <ViewMore onClick={() => navigate(PATH.MY_RECRUITMENTS('1'))}>더보기</ViewMore>
      </TitleContainer>
      <MyGroupsSection requireData={requireData} />

      <TitleContainer>
        <TitleText>최근 논 친구</TitleText>
        <ViewMore onClick={() => navigate(PATH.FRIENDS_PLAYED('1'))}>더보기</ViewMore>
      </TitleContainer>

      <RecentFriendsContainer>
        {recentFriends.map((friend, index) => (
          <Card
            nickname={friend.nickname}
            status={friend.status}
            address={friend.address}
            image={friend.image}
            content={friend.content}
            onClick={() => navigate(PATH.DIRECT_MESSAGE(`${index + 1}`))}
          />
        ))}
      </RecentFriendsContainer>

      <ContactUsContainer>
        <TitleText>문의</TitleText>
        <ContactUsSection />
      </ContactUsContainer>
    </Container>
  );
};

export default ProfilePage;
