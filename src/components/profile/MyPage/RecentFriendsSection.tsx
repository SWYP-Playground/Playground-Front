import styled from '@emotion/styled';

interface RecentFriendsProps {
  title: string;
  parentGender: 'male' | 'female';
  address: string;
  introText: string;
  profileImage: string;
}

function RecentFriends({
  title,
  parentGender,
  address,
  introText,
  profileImage,
}: RecentFriendsProps) {
  return (
    <RecommendButton>
      <HorizonContainer>
        <VerticalContainer>
          <Title>{title}</Title>
          <MyInfo>
            {parentGender === 'male' ? '아빠' : '엄마'} · {address}
          </MyInfo>
        </VerticalContainer>
        <ProfileImage src={profileImage} alt="프로필 이미지" />
      </HorizonContainer>
      <IntroText>{introText}</IntroText>
    </RecommendButton>
  );
}

export default RecentFriends;

const RecommendButton = styled.button`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black100};
  border-radius: 10px;
  gap: 8px;
  margin-top: 20px;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  padding: 8px;
`;

const HorizonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${(props) => props.theme.colors.primary4};
  display: block;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black800};
  text-align: center;
`;

const MyInfo = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black600};
`;

const IntroText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
  text-align: center;
  padding: 8px;
`;
