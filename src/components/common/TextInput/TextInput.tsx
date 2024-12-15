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
  onSubmit: (text: string) => void;
}

const TextInput = ({ placeholder, buttonLabel, onSubmit }: TextInputProps) => {
  const [text, setText] = useState<string>('');

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= TEXT_MAX_LENGTH) {
      setText(inputValue);
    }
  };

  const submitText = () => {
    if (text) {
      onSubmit(text);
      setText('');
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
      <ReportButton disabled={!text} onClick={submitText}>
        {buttonLabel}
      </ReportButton>
    </TextInputFlex>
  );
};

export default TextInput;
