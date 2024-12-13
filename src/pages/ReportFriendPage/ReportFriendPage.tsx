import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import { ReportFriendFlex } from '@/pages/ReportFriendPage/ReportFriendPage.style';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import TextInput from '@/components/common/TextInput/TextInput';

const ReportFriendPage = () => {
  const navigate = useNavigate();

  const goBackToPage = () => {
    navigate(-1);
  };

  return (
    <ReportFriendFlex>
      <Header title="신고하기" leftIcon={<LeftIcon />} onLeftClick={goBackToPage} />
      <TextInput
        placeholder="친구를 신고하는 이유와 자세한 상황을 설명해 주세요."
        buttonLabel="완료"
      />
    </ReportFriendFlex>
  );
};

export default ReportFriendPage;
