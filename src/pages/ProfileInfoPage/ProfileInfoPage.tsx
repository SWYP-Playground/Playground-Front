import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { Container, SendMessageButton } from '@/pages/ProfileInfoPage/ProfileInfoPage.syle.ts';
import { useNavigate } from 'react-router-dom';
import ProfileDetails from '@/components/profile/MyPage/ProfileDetailSection.tsx';
import { useEffect, useState } from 'react';
import getDecodedTokenData from '@/utils/getDecodedTokenData.ts';
import { getParentById } from '@/api/parent/getParentById';
import { ParentData } from '@/types/parent';

const ProfileInfoPage = () => {
  const navigate = useNavigate();

  const [parentInfo, setParentInfo] = useState<ParentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParentInfo = async () => {
      try {
        const authStorage = localStorage.getItem('auth-storage');
        if (!authStorage) {
          throw new Error('auth-storage가 없습니다. 로그인이 필요합니다.');
        }

        const { state } = JSON.parse(authStorage);
        if (!state?.token) {
          throw new Error('state.token이 없습니다.');
        }

        const userInfo = getDecodedTokenData();
        if (!userInfo.parentId) {
          throw new Error('부모 ID가 없습니다.');
        }

        const parentData = await getParentById(Number(userInfo.parentId));
        setParentInfo(parentData);
      } catch (err) {
        console.error('오류:', err);
        setError('부모 정보를 가져오는 중 문제가 발생했습니다.');
      }
    };

    fetchParentInfo();
  }, []);

  return (
    <Container>
      <Header title="프로필 정보" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      {error ? (
        <p>{error}</p>
      ) : parentInfo ? (
        <ProfileDetails
          progress={parentInfo.mannerTemp}
          children={parentInfo.children.map((child) => ({
            id: child.id,
            name: `아이 ${child.id}`,
            gender: child.gender === 'MALE' ? 'male' : 'female',
          }))}
          parentInfo={{
            nickname: parentInfo.nickname,
            address: parentInfo.address,
            introduce: parentInfo.introduce,
            profileImg: parentInfo.profileImg,
            role: parentInfo.role,
          }}
          showButtons={false}
          showSummary={true}
        />
      ) : (
        <p>로딩 중...</p>
      )}
      <SendMessageButton>쪽지 보내기</SendMessageButton>
    </Container>
  );
};

export default ProfileInfoPage;
