import { useNavigate, useParams } from 'react-router-dom';

import CustomBottomSheet from '@/components/common/BottomSheet/CustomBottomSheet';
import TextInput from '@/components/common/TextInput/TextInput';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import {
  PlayGroundRoomFlex,
  SendMessageButton,
  BottomSheetTitle,
} from '@/pages/PlaygroundMessagePage/PlaygroundMessagePage.style';
import Header from '@/components/layout/Header/Header';
import Card from '@/components/common/Card/Card';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import { useAllCommentByMatchIdQuery } from '@/hooks/api/useAllCommentByMatchIdQuery';
import { useCommentMutation } from '@/hooks/api/useCommentMutation';
import getDecodedTokenData from '@/utils/getDecodedTokenData';

const PlaygroundMessagePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { findFriendId } = params;
  const { AllCommentByMatchId: AllCommentByMatchIdData } = useAllCommentByMatchIdQuery(
    Number(findFriendId),
  );
  const commentMutation = useCommentMutation();
  const { isOpen, open, close } = useBottomSheet();
  const { nickname } = getDecodedTokenData();

  const goToBack = () => {
    navigate(-1);
  };

  const handleSubmitComment = (content: string) => {
    if (findFriendId) {
      commentMutation.mutate(
        {
          commentData: {
            matchId: Number(findFriendId),
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

  return (
    <PlayGroundRoomFlex>
      <Header title="모집글 댓글" leftIcon={<LeftIcon />} onLeftClick={goToBack} />
      {AllCommentByMatchIdData.map((item) => (
        <Card id={item.writerId} content={item.content} />
      ))}
      <SendMessageButton onClick={open}>댓글 보내기</SendMessageButton>
      <CustomBottomSheet isOpen={isOpen} onClose={close}>
        <BottomSheetTitle>댓글 작성</BottomSheetTitle>
        <TextInput
          placeholder="내용을 입력해 주세요."
          buttonLabel="보내기"
          onSubmit={handleSubmitComment}
        />
      </CustomBottomSheet>
    </PlayGroundRoomFlex>
  );
};

export default PlaygroundMessagePage;
