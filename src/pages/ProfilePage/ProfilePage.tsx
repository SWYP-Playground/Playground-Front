import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
} from '@/pages/ProfilePage/ProfilePage.style';
import { PATH } from '@/constants/path';
import ProfileDetails from '@/components/profile/MyPage/ProfileDetailSection.tsx';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
import ContactUsSection from '@/components/profile/MyPage/ContactUsSection.tsx';
import Card from '@/components/common/Card/Card.tsx';
import SettingButton from '@/components/profile/Button/SettingButton.tsx';
import { FindFriendRoomType, RecentFriendType } from '@/types/friend.ts';
import { getParentById } from '@/api/parent/getParentById';
import getDecodedTokenData from '@/utils/getDecodedTokenData';
import { getMyFindFriendList } from '@/api/findFriend/getMyFindFriendList';

const ProfilePage = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState<number>(0);
  const [parentInfo, setParentInfo] = useState<{
    nickname: string;
    address: string;
    introduce: string;
    profileImg?: string;
    role: string;
  }>({
    nickname: '',
    address: '',
    introduce: '',
    profileImg: undefined,
    role: '',
  });

  const [children, setChildren] = useState<
    { id: number; name: string; gender: 'female' | 'male' }[]
  >([]);

  const [requireData, setRequireData] = useState<FindFriendRoomType[]>([]);

  useEffect(() => {
    const fetchParentData = async () => {
      try {
        // 토큰 디코딩
        const { parentId } = getDecodedTokenData();
        if (!parentId) throw new Error('parentId가 없습니다.');

        // API 호출
        const data = await getParentById(Number(parentId));

        setParentInfo({
          nickname: data.nickname,
          address: data.address,
          introduce: data.introduce,
          profileImg: data.profileImg || undefined,
          role: data.role,
        });

        const formattedChildren = data.children.map((child) => ({
          id: child.id,
          name: `아이 ${child.id}`,
          gender: child.gender === 'MALE' ? 'male' : 'female',
        })) as { id: number; name: string; gender: 'female' | 'male' }[];

        setChildren(formattedChildren);
        setProgress(data.mannerTemp);
      } catch (err) {
        console.error('프로필 데이터를 불러오는 중 오류 발생:', err);
      }
    };

    // 내가 모집한 모임
    const fetchFindFriendData = async () => {
      try {
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
        console.error('모임 데이터를 불러오는 중 오류 발생:', err);
      }
    };

    fetchParentData();
    fetchFindFriendData();
  }, []);

  const recentFriends: RecentFriendType[] = [
    {
      nickname: '길동1',
      roleType: 'MOTHER',
      address: '구미시 산호대로 25길 25-3',
      introduce: '안녕하세요!',
      profileImg: 'https://via.placeholder.com/150',
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
        <ProfileDetails
          progress={progress}
          children={children}
          showButtons={true}
          parentInfo={parentInfo}
        />
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
            key={index}
            nickname={friend.nickname}
            status={friend.roleType}
            address={friend.address}
            image={friend.profileImg}
            content={friend.introduce}
            onClick={() => navigate(PATH.DIRECT_MESSAGE)}
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
