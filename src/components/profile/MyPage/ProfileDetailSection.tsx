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
} from '@/pages/MyProfilePage/MyProfilePage.style.ts';
import ProgressBar from './ProgressBar.tsx';
import ChildCard from '@/components/profile/MyPage/ChildCard.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
// import DefaultProfile from '@/assets/png/profile1.png';
import { ParentData } from '@/types/parent.ts';
import { convertRole } from '@/utils/convertRole.ts';
import { getRandomImage } from '@/components/profile/RandomImage.tsx';

interface ProfileDetailsProps {
  parentInfo: ParentData;
  showButtons?: boolean;
  showSummary?: boolean;
}

const ProfileDetails = ({ parentInfo, showButtons, showSummary }: ProfileDetailsProps) => {
  const navigate = useNavigate();

  return (
    <ProfileContainer>
      {/* <ProfileImage src={parentInfo.profileImg || DefaultProfile} alt="프로필 이미지" /> */}
      <ProfileImage src={getRandomImage()} alt="프로필 이미지" />
      <ProfileLabel>{parentInfo.nickname}</ProfileLabel>
      <ProfileSubLabel>{`${convertRole(parentInfo.role)} ㆍ ${parentInfo.address}`}</ProfileSubLabel>
      {showSummary && <SummaryText>{`"${parentInfo.introduce}"`}</SummaryText>}
      <ProgressBarContainer>
        <ProgressLabel>현재 온도</ProgressLabel>
        <ProgressTemp progress={parentInfo.mannerTemp}>{parentInfo.mannerTemp}°C</ProgressTemp>
      </ProgressBarContainer>
      <ProgressBar progress={parentInfo.mannerTemp} />
      <ChildCardContainer>
        {parentInfo.children.map((child, index) => (
          <ChildCard key={child.id} name={`아이 ${index + 1}`} gender={child.gender} />
        ))}
      </ChildCardContainer>
      {showButtons && (
        <>
          <ProfileButton onClick={() => navigate(PATH.EDIT_PROFILE(String(parentInfo.id)))}>
            프로필 수정
          </ProfileButton>
          <ProfileButton onClick={() => navigate(PATH.DIRECT_MESSAGE)}>쪽지함</ProfileButton>
        </>
      )}
    </ProfileContainer>
  );
};

export default ProfileDetails;
