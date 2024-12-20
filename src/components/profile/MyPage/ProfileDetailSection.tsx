import {
  ProfileContainer,
  ProfileImage,
  ProfileLabel,
  ProfileSubLabel,
  ProgressBarContainer,
  ProgressLabel,
  ProgressTemp,
  ChildCardContainer,
  ProfileButton,
  SummaryText,
} from '@/pages/ProfilePage/ProfilePage.style.ts';
import ProgressBar from './ProgressBar.tsx';
import ChildCard from '@/components/profile/MyPage/ChildCard.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import DefaultProfile from '@/assets/png/profile1.png';

interface ProfileDetailsProps {
  progress: number;
  children: {
    gender: 'male' | 'female';
    id: number;
    name: string;
  }[];
  parentInfo: {
    nickname: string;
    address: string;
    introduce: string;
    profileImg?: string | undefined;
    role: string;
  };
  showButtons?: boolean;
  showSummary?: boolean;
}

const ProfileDetails = ({
  progress,
  children,
  parentInfo,
  showButtons,
  showSummary,
}: ProfileDetailsProps) => {
  const navigate = useNavigate();

  const getRoleDisplayName = (role: string): string => {
    switch (role) {
      case 'FATHER':
        return '아빠';
      case 'MOTHER':
        return '엄마';
      default:
        return '보호자';
    }
  };

  // children 데이터 디버깅
  // console.log('children 데이터:', children);

  return (
    <ProfileContainer>
      {/* <ProfileImage src={parentInfo.profileImg || DefaultProfile} alt="프로필 이미지" /> */}
      <ProfileImage src={DefaultProfile} alt="프로필 이미지" />
      <ProfileLabel>{parentInfo.nickname}</ProfileLabel>
      <ProfileSubLabel>{`${getRoleDisplayName(parentInfo.role)} ㆍ ${parentInfo.address}`}</ProfileSubLabel>
      {showSummary && <SummaryText>{`"${parentInfo.introduce}"`}</SummaryText>}
      <ProgressBarContainer>
        <ProgressLabel>현재 온도</ProgressLabel>
        <ProgressTemp progress={progress}>{progress}°C</ProgressTemp>
      </ProgressBarContainer>
      <ProgressBar progress={progress} />
      <ChildCardContainer>
        {children.map((child) => (
          <ChildCard key={child.id} name={child.name} gender={child.gender} />
        ))}
      </ChildCardContainer>
      {showButtons && (
        <>
          <ProfileButton onClick={() => navigate(PATH.EDIT_PROFILE('1'))}>
            프로필 수정
          </ProfileButton>
          <ProfileButton onClick={() => navigate(PATH.DIRECT_MESSAGE)}>쪽지함</ProfileButton>
        </>
      )}
    </ProfileContainer>
  );
};

export default ProfileDetails;
