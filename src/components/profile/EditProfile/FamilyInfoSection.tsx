import {
  InputContainer,
  Input,
  Label,
  RadioContainer,
  ButtonGroup,
  RadioButton,
  AddButton,
} from '../../../pages/EditProfilePage/EditProfilePage.style';

interface Props {
  register: any;
  errors: any;
  fields: any;
  append: any;
  remove: any;
}

const FamilyInfoSection = ({ register, errors, fields, append, remove }: Props) => {
  return (
    <>
      <h2>가족 정보</h2>
      <RadioContainer>
        <Label>보호자 성별</Label>
        <ButtonGroup>
          <RadioButton type="radio" value="엄마" {...register('parentGender')} />
          엄마
          <RadioButton type="radio" value="아빠" {...register('parentGender')} />
          아빠
        </ButtonGroup>
      </RadioContainer>

      <InputContainer>
        <Label htmlFor="parentBirthDate">보호자 생년월일</Label>
        <Input
          id="parentBirthDate"
          type="date"
          {...register('parentBirthDate', {
            required: '생년월일을 입력해 주세요.',
          })}
        />
        {errors.parentBirthDate && <p>{errors.parentBirthDate.message}</p>}
      </InputContainer>

      <h2>아이 정보</h2>
      {fields.map((field: any, index: number) => (
        <div key={field.id}>
          <RadioContainer>
            <Label>아이 성별</Label>
            <ButtonGroup>
              <RadioButton
                type="radio"
                value="남자 아이"
                {...register(`children.${index}.gender` as const)}
              />
              남자 아이
              <RadioButton
                type="radio"
                value="여자 아이"
                {...register(`children.${index}.gender` as const)}
              />
              여자 아이
            </ButtonGroup>
          </RadioContainer>
          <InputContainer>
            <Label>아이 생년월일</Label>
            <Input
              type="date"
              {...register(`children.${index}.birthDate` as const, {
                required: '아이 생년월일을 입력해 주세요.',
              })}
            />
            {errors.children?.[index]?.birthDate && (
              <p>{errors.children[index]?.birthDate?.message}</p>
            )}
          </InputContainer>
          <button type="button" onClick={() => remove(index)}>
            아이 삭제
          </button>
        </div>
      ))}
      <AddButton type="button" onClick={() => append({ gender: '', birthDate: '' })}>
        + 아이 추가
      </AddButton>
    </>
  );
};

export default FamilyInfoSection;
