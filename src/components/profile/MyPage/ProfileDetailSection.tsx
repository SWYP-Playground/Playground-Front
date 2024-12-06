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
} from '../../../pages/ProfilePage/ProfilePage.style.ts';
import ProgressBar from './ProgressBar.tsx';
import ChildCard from '@/components/profile/MyPage/ChildCard.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

interface ProfileDetailsProps {
  progress: number;
  children: { name: string; gender: 'female' | 'male' }[];
}

const ProfileDetails = ({ progress, children }: ProfileDetailsProps) => {
  const navigate = useNavigate();

  return (
    <ProfileContainer>
      <ProfileImage />
      <ProfileLabel>닉네임</ProfileLabel>
      <ProfileSubLabel>아빠 | 서울시 노원구 중계동</ProfileSubLabel>
      <ProgressBarContainer>
        <ProgressLabel>현재 온도</ProgressLabel>
        <ProgressTemp progress={progress}>{progress}°C</ProgressTemp>
      </ProgressBarContainer>
      <ProgressBar progress={progress} />

      <ChildCardContainer>
        {children.map((child, index) => (
          <ChildCard key={index} name={child.name} gender={child.gender} />
        ))}
      </ChildCardContainer>
      <ProfileButton onClick={() => navigate(PATH.EDIT_PROFILE('1'))}>프로필 수정</ProfileButton>
      <ProfileButton onClick={() => navigate(PATH.DIRECT_MESSAGE('1'))}>쪽지함</ProfileButton>
    </ProfileContainer>
  );
};

export default ProfileDetails;
