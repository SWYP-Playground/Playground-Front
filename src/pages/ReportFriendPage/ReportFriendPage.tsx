import { useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import { ReportFriendFlex } from '@/pages/ReportFriendPage/ReportFriendPage.style';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import TextInput from '@/components/common/TextInput/TextInput';
import { useParentQuery } from '@/hooks/api/useParentQuery';
import { useReportMutation } from '@/hooks/api/useReportMutation';
import getDecodedTokenData from '@/utils/getDecodedTokenData';

const ReportFriendPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { userId: findFriendId } = params;
  const { ParentData } = useParentQuery(Number(findFriendId));
  const reportMutation = useReportMutation();
  const { nickname } = getDecodedTokenData();

  const goBackToPage = () => {
    navigate(-1);
  };

  const handleSubmitReport = (cause: string) => {
    if (ParentData && findFriendId) {
      reportMutation.mutate(
        {
          ReportData: {
            targetNickname: ParentData.nickname,
            findFriendId: Number(findFriendId),
            cause,
            writtenBy: nickname, // 나중에 JWT에서 닉네임 빼야함
          },
        },
        { onSuccess: () => navigate(-1) },
      );
    }
  };

  return (
    <ReportFriendFlex>
      <Header title="신고하기" leftIcon={<LeftIcon />} onLeftClick={goBackToPage} />
      <TextInput
        placeholder="친구를 신고하는 이유와 자세한 상황을 설명해 주세요."
        buttonLabel="완료"
        onSubmit={handleSubmitReport}
      />
    </ReportFriendFlex>
  );
};

export default ReportFriendPage;
