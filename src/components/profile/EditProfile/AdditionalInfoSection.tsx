import {
  InputContainer,
  Label,
  TextArea,
  RadioContainer,
  ButtonGroup,
  RadioButton,
} from '../../../pages/EditProfilePage/EditProfilePage.style';

interface Props {
  register: any;
  errors: any;
}

const AdditionalInfoSection = ({ register, errors }: Props) => {
  return (
    <>
      <h2>추가 정보</h2>
      <RadioContainer>
        <Label>친구 추천 기준</Label>
        <ButtonGroup>
          <RadioButton type="radio" value="가까운 거리" {...register('friendCriteria')} />
          가까운 거리
          <RadioButton type="radio" value="같은 성별" {...register('friendCriteria')} />
          같은 성별
          <RadioButton type="radio" value="같은 인원 수" {...register('friendCriteria')} />
          같은 인원 수
        </ButtonGroup>
      </RadioContainer>

      <InputContainer>
        <Label htmlFor="introduction">소개글</Label>
        <TextArea
          id="introduction"
          placeholder="간단한 소개글을 적어주세요."
          {...register('introduction', {
            maxLength: {
              value: 100,
              message: '소개글은 100자 이내여야 합니다.',
            },
          })}
        />
        {errors.introduction && <p>{errors.introduction.message}</p>}
      </InputContainer>
    </>
  );
};

export default AdditionalInfoSection;
