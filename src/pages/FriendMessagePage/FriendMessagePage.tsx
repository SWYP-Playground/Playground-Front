import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import { FriendMessageFlex, MessageFlex } from '@/pages/FriendMessagePage/FriendMessagePage.style';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import { convertWriter } from '@/utils/convertWriter';
import { PATH } from '@/constants/path';
import getDecodedTokenData from '@/utils/getDecodedTokenData';
import { useAllNoteQuery } from '@/hooks/api/useAllNoteQuery';
import FilterMessage from '@/utils/filterMessage';
import CustomBottomSheet from '@/components/common/BottomSheet/CustomBottomSheet';
import {
  BottomSheetTitle,
  SendMessageButton,
} from '@/pages/PlaygroundMessagePage/PlaygroundMessagePage.style';
import TextInput from '@/components/common/TextInput/TextInput';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import { useNoteMutation } from '@/hooks/api/useNoteMutation';
import MessageRoom from '@/components/common/MessageRoom/MessageRoom';
import { getRandomImage } from '@/components/profile/RandomImage';

const FriendMessagePage = () => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useBottomSheet();
  const params = useParams();
  const { noteId } = params;
  const writer = noteId ? convertWriter(noteId) : '';
  const [nickname, setNickname] = useState<string>('');
  const { AllNoteData } = useAllNoteQuery();
  const noteMutation = useNoteMutation();

  useEffect(() => {
    try {
      const decodedTokenData = getDecodedTokenData();
      setNickname(decodedTokenData.nickname);
    } catch (error) {
      console.error(error);
      navigate(PATH.SIGNIN);
    }
  }, [navigate]);

  const Message = FilterMessage({ data: AllNoteData, nickname: nickname, writer: writer });

  const goToBack = () => {
    navigate(-1);
  };

  const handleSubmitNote = (content: string) => {
    if (writer && nickname) {
      noteMutation.mutate(
        {
          noteData: {
            targetNickname: writer,
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
    <FriendMessageFlex>
      <Header title={writer} leftIcon={<LeftIcon />} onLeftClick={goToBack} />
      <MessageFlex>
        {Message &&
          Message.map((item, index) => (
            <MessageRoom
              id={String(item.writerId)}
              avatar={getRandomImage()}
              content={item.content}
              isCurrentUser={item.writtenBy === nickname}
              isFirstMessageByUser={index === 0 || Message[index - 1].writerId !== item.writerId}
            />
          ))}
      </MessageFlex>
      <SendMessageButton onClick={open}>쪽지 보내기</SendMessageButton>
      <CustomBottomSheet isOpen={isOpen} onClose={close}>
        <BottomSheetTitle>쪽지 작성</BottomSheetTitle>
        <TextInput
          placeholder="내용을 입력해 주세요."
          buttonLabel="보내기"
          onSubmit={handleSubmitNote}
        />
      </CustomBottomSheet>
    </FriendMessageFlex>
  );
};

export default FriendMessagePage;
