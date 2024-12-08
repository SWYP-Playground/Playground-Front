import { useForm, useFieldArray } from 'react-hook-form';
import { Container, Form, SubmitButton } from './EditProfilePage.style.ts';
import ProfileImageSection from '@/components/profile/EditProfile/ProfileImageSection.tsx';
import FamilyInfoSection from '@/components/profile/EditProfile/FamilyInfoSection.tsx';
import AdditionalInfoSection from '@/components/profile/EditProfile/AdditionalInfoSection.tsx';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header/Header.tsx';
import { PATH } from '@/constants/path.ts';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import CloseIcon from '@/assets/svg/cancel.svg?react';
import ExtraImageSection from '@/components/profile/EditProfile/ExtraImageSection.tsx';

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
      <Header
        title="프로필 작성"
        leftIcon={<LeftIcon />}
        onLeftClick={() => navigate(-1)}
        rightIcon={<CloseIcon />}
        onRightClick={() => navigate(PATH.SIGNIN)}
      />

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
        <ExtraImageSection />
        <SubmitButton type="submit">완료</SubmitButton>
      </Form>
    </Container>
  );
};

export default EditProfilePage;
