import { ChangeEvent, useState } from 'react';
import { Flex } from '@radix-ui/themes';

import { TEXT_MAX_LENGTH } from '@/constants/text';
import {
  LengthSpan,
  ReportButton,
  ReportTextArea,
  ReportTextFlex,
  ReportTitleSpan,
  TextInputFlex,
} from '@/components/common/TextInput/TextInput.style';

interface TextInputProps {
  placeholder: string;
  buttonLabel: string;
}

const TextInput = ({ placeholder, buttonLabel }: TextInputProps) => {
  const [text, setText] = useState<string>('');

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= TEXT_MAX_LENGTH) {
      setText(inputValue);
    }
  };

  return (
    <TextInputFlex>
      <Flex width="90%">
        <ReportTitleSpan>내용</ReportTitleSpan>
      </Flex>
      <ReportTextFlex>
        <ReportTextArea placeholder={placeholder} value={text} onChange={onChangeText} />
        <LengthSpan>
          {text.length}/{TEXT_MAX_LENGTH}자
        </LengthSpan>
      </ReportTextFlex>
      <ReportButton disabled={!text}>{buttonLabel}</ReportButton>
    </TextInputFlex>
  );
};

export default TextInput;
