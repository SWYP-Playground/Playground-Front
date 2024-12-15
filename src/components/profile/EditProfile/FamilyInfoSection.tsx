import { ErrorMessage } from '@/pages/SignInPage/SignInPage.style';
import {
  InputContainer,
  Input,
  Label,
  RadioContainer,
  PlusIcon,
  AddButton,
  Title,
  SubTitle,
  HorizonLine,
  ComponentContainer,
  DeleteButton,
  SubTitleContainer,
  Blue,
} from '@/pages/EditProfilePage/EditProfilePage.style';
import ToggleButtonGroupComponent from '@/components/profile/Button/ToggleButton';
import { useState } from 'react';
interface Props {
  register: any;
  errors: any;
  fields: any;
  append: any;
  remove: any;
}

const FamilyInfoSection = ({ register, errors, fields, append, remove }: Props) => {
  const [parentGender, setParentGender] = useState('');
  const [childGenders, setChildGenders] = useState<{ [key: number]: string }>({});

  const handleParentGenderChange = (value: string) => {
    setParentGender(value);
    console.log(`부모 성별 선택: ${value}`);
  };

  const handleChildGenderChange = (index: number, value: string) => {
    setChildGenders((prev) => ({
      ...prev,
      [index]: value,
    }));
    console.log(`아이 ${index + 1} 성별 선택: ${value}`);
  };

  return (
    <ComponentContainer>
      <Title>가족 정보</Title>

      <RadioContainer>
        <SubTitle>보호자</SubTitle>
        <Label>
          성별 <Blue>*</Blue>
        </Label>
        <ToggleButtonGroupComponent
          options={['엄마', '아빠']}
          selectedValue={parentGender}
          onChange={handleParentGenderChange}
        />
      </RadioContainer>

      <InputContainer>
        <Label htmlFor="parentBirthDate">
          생년월일 <Blue>*</Blue>
        </Label>
        <Input
          id="parentBirthDate"
          type="date"
          {...register('parentBirthDate', {
            required: '생년월일을 입력해 주세요.',
          })}
        />
        {errors.parentBirthDate && <ErrorMessage>{errors.parentBirthDate.message}</ErrorMessage>}
      </InputContainer>

      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <HorizonLine />
          <SubTitleContainer>
            <SubTitle>아이 {index + 1}</SubTitle>
            <DeleteButton type="button" onClick={() => remove(index)} />
          </SubTitleContainer>

          <Label>
            성별 <Blue>*</Blue>
          </Label>
          <ToggleButtonGroupComponent
            options={['남자 아이', '여자 아이']}
            selectedValue={childGenders[index] || ''}
            onChange={(value) => handleChildGenderChange(index, value)}
          />

          <InputContainer>
            <Label>
              생년월일 <Blue>*</Blue>
            </Label>
            <Input
              type="date"
              {...register(`children.${index}.birthDate` as const, {
                required: '아이 생년월일을 입력해 주세요.',
              })}
            />
            {errors.children?.[index]?.birthDate && (
              <ErrorMessage>{errors.children[index]?.birthDate?.message}</ErrorMessage>
            )}
          </InputContainer>
        </div>
      ))}

      {/* 아이 추가 버튼 */}
      <AddButton type="button" onClick={() => append({ gender: '', birthDate: '' })}>
        <PlusIcon />
        아이 추가
      </AddButton>
      <HorizonLine />
    </ComponentContainer>
  );
};

export default FamilyInfoSection;
