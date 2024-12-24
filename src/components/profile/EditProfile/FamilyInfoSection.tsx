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
  onChange: (key: string, value: any) => void;
}

const FamilyInfoSection = ({ register, errors, fields, append, remove, onChange }: Props) => {
  const [parentGender, setParentGender] = useState('');
  const [childData, setChildData] = useState<{
    [key: number]: { gender: string; birthDate: string };
  }>(
    fields.reduce((acc: any, field: any, index: number) => {
      acc[index] = { gender: field.gender || '', birthDate: field.birthDate || '' };
      return acc;
    }, {}),
  );

  const handleParentGenderChange = (value: string) => {
    setParentGender(value);
    const role = value === '엄마' ? 'MOTHER' : 'FATHER';
    onChange('role', role);
  };

  const handleChildDataChange = (index: number, key: 'gender' | 'birthDate', value: string) => {
    setChildData((prev) => {
      const updatedChild = { ...prev[index], [key]: value };
      const updatedChildData = { ...prev, [index]: updatedChild };

      const updatedChildren = Object.values(updatedChildData);
      onChange('children', updatedChildren);

      console.log('현재 아이 데이터:', updatedChildData);
      return updatedChildData;
    });
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
          {...register('birthDate', {
            required: '생년월일을 입력해 주세요.',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              onChange('birthDate', value);
              console.log('보호자 생년월일:', value);
            },
          })}
        />
        {errors.birthDate && <ErrorMessage>{errors.birthDate.message}</ErrorMessage>}
      </InputContainer>

      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <HorizonLine />
          <SubTitleContainer>
            <SubTitle>아이 {index + 1}</SubTitle>
            <DeleteButton
              type="button"
              onClick={() => {
                const updatedChildren = fields.filter((_: any, i: number) => i !== index);
                remove(index);
                setChildData((prev) => {
                  const newChildData = { ...prev };
                  delete newChildData[index];
                  console.log('아이 삭제됨 - 현재 아이 데이터:', newChildData);
                  return newChildData;
                });
                onChange('children', updatedChildren);
              }}
            />
          </SubTitleContainer>

          <Label>
            성별 <Blue>*</Blue>
          </Label>
          <ToggleButtonGroupComponent
            options={['남자 아이', '여자 아이']}
            selectedValue={
              childData[index]?.gender === 'MALE'
                ? '남자 아이'
                : childData[index]?.gender === 'FEMALE'
                  ? '여자 아이'
                  : ''
            }
            onChange={(value) => {
              const genderValue = value === '남자 아이' ? 'MALE' : 'FEMALE';
              handleChildDataChange(index, 'gender', genderValue);
            }}
          />

          <InputContainer>
            <Label>
              생년월일 <Blue>*</Blue>
            </Label>
            <Input
              type="date"
              value={childData[index]?.birthDate || ''}
              {...register(`children.${index}.birthDate`, {
                required: '아이 생년월일을 입력해 주세요.',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  handleChildDataChange(index, 'birthDate', value);
                },
              })}
            />
            {errors.children?.[index]?.birthDate && (
              <ErrorMessage>{errors.children[index]?.birthDate?.message}</ErrorMessage>
            )}
          </InputContainer>
        </div>
      ))}

      <AddButton
        type="button"
        onClick={() => {
          append({ gender: '', birthDate: '' });
          setChildData((prev) => {
            const newChildData = {
              ...prev,
              [Object.keys(prev).length]: { gender: '', birthDate: '' },
            };
            console.log('아이 추가됨 - 현재 아이 데이터:', newChildData);
            return newChildData;
          });
          onChange('children', [...fields, { gender: '', birthDate: '' }]);
        }}
      >
        <PlusIcon />
        아이 추가
      </AddButton>
      <HorizonLine />
    </ComponentContainer>
  );
};

export default FamilyInfoSection;
