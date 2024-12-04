import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import {
  LengthSpan,
  ReportButton,
  ReportFriendFlex,
  ReportTextArea,
  ReportTextFlex,
  ReportTitleSpan,
} from '@/pages/ReportFriendPage/ReportFriendPage.style';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { ChangeEvent, useState } from 'react';
import { TEXT_MAX_LENGTH } from '@/constants/text';
import { Flex } from '@radix-ui/themes';

const ReportFriendPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState<string>('');

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= TEXT_MAX_LENGTH) {
      setText(inputValue);
    }
  };

  const goBackToPage = () => {
    navigate(-1);
  };

  return (
    <ReportFriendFlex>
      <Header title="신고하기" leftIcon={<LeftIcon />} onLeftClick={goBackToPage} />
      <Flex width="90%">
        <ReportTitleSpan>내용</ReportTitleSpan>
      </Flex>
      <ReportTextFlex>
        <ReportTextArea
          placeholder="친구를 신고하는 이유와 자세한 상황을 설명해 주세요."
          value={text}
          onChange={onChangeText}
        />
        <LengthSpan>
          {text.length}/{TEXT_MAX_LENGTH}자
        </LengthSpan>
      </ReportTextFlex>
      <ReportButton disabled={!text}>완료</ReportButton>
    </ReportFriendFlex>
  );
};

export default ReportFriendPage;
