import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { Container, SendMessageButton } from '@/pages/ProfileInfoPage/ProfileInfoPage.syle.ts';
import ProfileDetails from '@/components/profile/MyPage/ProfileDetailSection.tsx';
import { useParentQuery } from '@/hooks/api/useParentQuery';
import CustomBottomSheet from '@/components/common/BottomSheet/CustomBottomSheet';
import { BottomSheetTitle } from '@/pages/PlaygroundMessagePage/PlaygroundMessagePage.style';
import TextInput from '@/components/common/TextInput/TextInput';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import { useNoteMutation } from '@/hooks/api/useNoteMutation';
import getDecodedTokenData from '@/utils/getDecodedTokenData';
import { PATH } from '@/constants/path';

const ProfileInfoPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { userId } = params;
  const { ParentData } = useParentQuery(Number(userId));
  const { isOpen, open, close } = useBottomSheet();
  const noteMutation = useNoteMutation();
  const [nickname, setNickname] = useState<string | null>(null);

  if (!ParentData) {
    return null;
  }

  const handleSubmitNote = (content: string) => {
    if (userId && nickname) {
      noteMutation.mutate(
        {
          noteData: {
            targetNickname: ParentData.nickname,
            content,
            writtenBy: nickname,
          },
        },
        {
          onSuccess: close,
        },
      );
    }
  };

  useEffect(() => {
    const decodedTokenData = getDecodedTokenData();
    if (decodedTokenData) {
      setNickname(decodedTokenData.nickname);
    } else {
      navigate(PATH.SIGNIN);
    }
  }, [navigate]);

  if (!nickname) {
    return null;
  }

  return (
    <Container>
      <Header title="프로필 정보" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      {ParentData ? (
        <ProfileDetails parentInfo={ParentData} showButtons={false} showSummary={true} />
      ) : (
        <p>로딩 중...</p>
      )}
      <SendMessageButton onClick={open}>쪽지 보내기</SendMessageButton>
      <CustomBottomSheet isOpen={isOpen} onClose={close}>
        <BottomSheetTitle>쪽지 작성</BottomSheetTitle>
        <TextInput
          placeholder="내용을 입력해 주세요."
          buttonLabel="보내기"
          onSubmit={handleSubmitNote}
        />
      </CustomBottomSheet>
    </Container>
  );
};

export default ProfileInfoPage;
