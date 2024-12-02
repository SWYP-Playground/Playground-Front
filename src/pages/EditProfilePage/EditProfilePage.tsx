import { useForm, useFieldArray } from 'react-hook-form';
import {
  Container,
  HeaderContainer,
  LeftIcon,
  Title,
  CancelButton,
  Form,
  SubmitButton,
} from './EditProfilePage.style.ts';
import ProfileImageSection from '../../../src/components/profile/EditProfile/ProfileImageSection.tsx';
import FamilyInfoSection from '../../../src/components/profile/EditProfile/FamilyInfoSection.tsx';
import AdditionalInfoSection from '../../../src/components/profile/EditProfile/AdditionalInfoSection.tsx';
import { useNavigate } from 'react-router-dom';

interface ChildInfo {
  gender: string;
  birthDate: string;
}

interface FormData {
  nickname: string;
  phoneNumber: string;
  address: string;
  parentGender: string;
  parentBirthDate: string;
  children: ChildInfo[];
  friendCriteria: string;
  introduction: string;
  additionalPhoto: File | null;
}

const EditProfilePage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }, // 유효성 검사 통과 못하면 에러 표시
  } = useForm<FormData>({
    defaultValues: {
      children: [{ gender: '', birthDate: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'children',
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <Container>
      <HeaderContainer>
        <LeftIcon src="/src/assets/svg/left-icon.svg" alt="LeftIcon" onClick={() => navigate(-1)} />
        <Title>프로필 작성</Title>
        <CancelButton src="/src/assets/svg/cancel.svg" />
      </HeaderContainer>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImageSection register={register} errors={errors} />
        <FamilyInfoSection
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
        />
        <AdditionalInfoSection register={register} errors={errors} />
        <SubmitButton type="submit">완료</SubmitButton>
      </Form>
    </Container>
  );
};

export default EditProfilePage;
