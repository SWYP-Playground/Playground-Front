import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import {
  Container,
  SendMessageButton,
  ExtraImageContainer,
} from '@/pages/ProfileInfoPage/ProfileInfoPage.syle.ts';
import { useNavigate } from 'react-router-dom';
import ProfileDetails from '@/components/profile/MyPage/ProfileDetailSection.tsx';
import ExtraImageSection from '@/components/profile/EditProfile/ExtraImageSection.tsx';

const ProfileInfoPage = () => {
  const progress = 70;

  const children: { name: string; gender: 'female' | 'male' }[] = [
    { name: '아이1', gender: 'female' },
    { name: '아이2', gender: 'male' },
  ];

  const images = [
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTVfMTcz%2FMDAxNjQ3MjcwNTE3NjAx.jSs23mu1-6jBML5I3i1VtQ-F6zP3RP1NFd0Z-joljJ8g.Bgm-9zHnKM50c5ceQpsFQXVbFhRDEK3EG69ALhDrvbsg.JPEG.only_my_diary%2FScreenshot%25A3%25DF20220314%25A3%25AD233611%25A3%25DFYouTube.jpg&type=sc960_832',
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTVfMTcz%2FMDAxNjQ3MjcwNTE3NjAx.jSs23mu1-6jBML5I3i1VtQ-F6zP3RP1NFd0Z-joljJ8g.Bgm-9zHnKM50c5ceQpsFQXVbFhRDEK3EG69ALhDrvbsg.JPEG.only_my_diary%2FScreenshot%25A3%25DF20220314%25A3%25AD233611%25A3%25DFYouTube.jpg&type=sc960_832',
  ];

  const navigate = useNavigate();

  return (
    <Container>
      <Header title="프로필 정보" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      <ProfileDetails
        progress={progress}
        children={children}
        showButtons={false}
        showSummary={true}
      />
      {Array.isArray(images) && images.length > 0 && (
        <ExtraImageContainer>
          <ExtraImageSection images={images} showUploadButton={false} />
        </ExtraImageContainer>
      )}
      <SendMessageButton>쪽지 보내기</SendMessageButton>
    </Container>
  );
};

export default ProfileInfoPage;
