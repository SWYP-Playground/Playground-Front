import {
  InputContainer,
  Label,
  TextArea,
  ErrorMessage,
  RadioContainer,
  Title,
  TextLengthContainer,
  ComponentContainer,
  Blue,
} from '@/pages/EditProfilePage/EditProfilePage.style';
import RadioButtonGroup from '@/components/profile/Button/RadioButton.tsx';
import { useState } from 'react';

interface Props {
  register: any;
  errors: any;
}

const AdditionalInfoSection = ({ register, errors }: Props) => {
  const [selectedOption, setSelectedOption] = useState('가까운 거리');

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const [textLength, setTextLength] = useState(0);

  const handleInputTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextLength(e.target.value.length);
  };

  return (
    <ComponentContainer>
      <Title>추가 정보</Title>
      <RadioContainer>
        <Label>
          친구 추천 기준 <Blue>*</Blue>
        </Label>
        <RadioButtonGroup
          options={[
            { value: '가까운 거리', label: '가까운 거리' },
            { value: '같은 성별', label: '같은 성별' },
            { value: '같은 인원 수', label: '같은 인원 수' },
          ]}
          selectedValue={selectedOption}
          onChange={handleRadioChange}
        />
      </RadioContainer>

      <InputContainer>
        <Label htmlFor="introduction">
          소개글 <Blue>*</Blue>
        </Label>
        <TextArea
          id="introduction"
          placeholder={`간단한 소개글을 적어주세요.\nex. 자주 노는 놀이터, 노는 시간대 등`}
          {...register('introduction', {
            maxLength: {
              value: 100,
              message: '소개글은 100자 이내여야 합니다.',
            },
          })}
          onChange={(e) => {
            handleInputTextChange(e);
            register('introduction').onChange(e);
          }}
        />
        <TextLengthContainer>{textLength}/ 100자</TextLengthContainer>
        {errors.introduction && <ErrorMessage>{errors.introduction.message}</ErrorMessage>}
      </InputContainer>
    </ComponentContainer>
  );
};

export default AdditionalInfoSection;
