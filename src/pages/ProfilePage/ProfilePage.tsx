import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import {
  Container,
  Background,
  SettingsButton,
  SettingIcon,
  SettingText,
  TitleText,
  ViewMore,
  ContactUsContainer,
  TitleContainer,
  RecentFriendsContainer,
} from './ProfilePage.style.ts';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import ProfileDetails from '../../components/profile/MyPage/ProfileDetailSection.tsx';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
import RecentFriendsSection from '@/components/profile/MyPage/RecentFriendsSection.tsx';
import ContactUsSection from '@/components/profile/MyPage/ContactUsSection.tsx';

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

  return (
    <Container>
      <Background>
        <Header
          title="내정보"
          leftIcon={<LeftIcon />}
          rightIcon={
            <SettingsButton>
              <SettingIcon />
              <SettingText>설정</SettingText>
            </SettingsButton>
          }
          onRightClick={() => navigate(PATH.EDIT_ACCOUNT('1'))}
        />
        <ProfileDetails progress={progress} children={children} />
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
        <RecentFriendsSection
          title="닉네임"
          parentGender="male"
          address="서울시 노원구 중계동"
          introText="안녕하세요!"
          profileImage="https://via.placeholder.com/150"
        />
      </RecentFriendsContainer>

      <ContactUsContainer>
        <TitleText>문의</TitleText>
        <ContactUsSection />
      </ContactUsContainer>
    </Container>
  );
};

export default ProfilePage;
