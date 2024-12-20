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
  BlankText,
} from '@/pages/MyProfilePage/MyProfilePage.style';
import { PATH } from '@/constants/path';
import ProfileDetails from '@/components/profile/MyPage/ProfileDetailSection.tsx';
import MyGroupsSection from '@/components/profile/MyPage/MyGroupsSection.tsx';
import ContactUsSection from '@/components/profile/MyPage/ContactUsSection.tsx';
import Card from '@/components/common/Card/Card.tsx';
import SettingButton from '@/components/profile/Button/SettingButton.tsx';
import getDecodedTokenData from '@/utils/getDecodedTokenData';
import { useParentQuery } from '@/hooks/api/useParentQuery';
import { useMyFindFriendListQuery } from '@/hooks/api/useMyFindFriendListQuery';
import { useRecentFriendQuery } from '@/hooks/api/useRecentFriendQuery';
import { useEffect, useState } from 'react';

const MyProfilePage = () => {
  const navigate = useNavigate();
  const [parentId, setParentId] = useState<string | null>(null);

  const { ParentData } = useParentQuery(Number(parentId));
  const { MyFindFriendListData } = useMyFindFriendListQuery();
  const { RecentFriendData } = useRecentFriendQuery();

  useEffect(() => {
    try {
      const decodedTokenData = getDecodedTokenData();
      setParentId(decodedTokenData.parentId);
    } catch (error) {
      console.error(error);
      navigate(PATH.SIGNIN);
    }
  }, [navigate]);

  if (!parentId || !ParentData) {
    return null;
  }

  const singleFindFriend = MyFindFriendListData.length > 0 ? [MyFindFriendListData[0]] : [];
  const singleRecentFriend = RecentFriendData.length > 0 ? [RecentFriendData[0]] : [];

  return (
    <Container>
      <Background>
        <Header
          title="내정보"
          leftIcon={<LeftIcon />}
          rightIcon={<SettingButton />}
          onRightClick={() => navigate(PATH.USER_SETTING(parentId))}
        />
        <ProfileDetails showButtons={true} parentInfo={ParentData} />
      </Background>

      <TitleContainer>
        <TitleText>내가 모집한 모임</TitleText>
        <ViewMore onClick={() => navigate(PATH.MY_RECRUITMENTS(parentId))}>더보기</ViewMore>
      </TitleContainer>
      {singleFindFriend.length > 0 ? (
        <MyGroupsSection requireData={singleFindFriend} />
      ) : (
        <BlankText>내가 모집한 모임이 없습니다.</BlankText>
      )}

      <TitleContainer>
        <TitleText>최근 논 친구</TitleText>
        <ViewMore onClick={() => navigate(PATH.FRIENDS_PLAYED(parentId))}>더보기</ViewMore>
      </TitleContainer>
      <RecentFriendsContainer>
        {singleRecentFriend.length > 0 ? (
          singleRecentFriend.map((friend, index) => (
            <Card
              key={index}
              nickname={friend.nickname}
              status={friend.roleType}
              address={friend.address}
              image={friend.profileImg}
              content={friend.introduce}
              onClick={() => navigate(PATH.DIRECT_MESSAGE)}
            />
          ))
        ) : (
          <BlankText>최근 논 친구가 없습니다.</BlankText>
        )}
      </RecentFriendsContainer>

      <ContactUsContainer>
        <TitleText>문의</TitleText>
        <ContactUsSection />
      </ContactUsContainer>
    </Container>
  );
};

export default MyProfilePage;
