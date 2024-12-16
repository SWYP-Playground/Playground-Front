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
import { useState } from 'react';
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

  const [formValues, setFormValues] = useState<FormData>({
    nickname: '',
    phoneNumber: '',
    address: '',
    parentGender: '',
    parentBirthDate: '',
    children: [],
    friendCriteria: '',
    introduction: '',
    additionalPhoto: null,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      children: [{ gender: '', birthDate: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'children',
  });

  const handleInputChange = (key: keyof FormData, value: any) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setFormValues((prev) => ({
      ...prev,
      additionalPhoto: file,
    }));
  };

  const onSubmit = (data: FormData) => {
    const finalData = {
      ...formValues,
      children: data.children,
    };
    console.log('Form Data:', finalData);
  };

  return (
    <Container>
      <Header
        title="프로필 수정"
        leftIcon={<LeftIcon />}
        onLeftClick={() => navigate(-1)}
        rightIcon={<CloseIcon />}
        onRightClick={() => navigate(PATH.SIGNIN)}
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImageSection
          register={register}
          errors={errors}
          onFileChange={handleFileChange}
          onChange={(key, value) => handleInputChange(key as keyof FormData, value)}
        />
        <FamilyInfoSection
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
          onChange={(key, value) => handleInputChange(key as keyof FormData, value)}
        />
        <AdditionalInfoSection
          register={register}
          errors={errors}
          onChange={(key, value) => handleInputChange(key as keyof FormData, value)}
        />
        <ExtraImageSection
          isEditable={true}
          // onFileChange={handleFileChange} // 추가된 prop 전달
        />
        <SubmitButton type="submit">완료</SubmitButton>
      </Form>
    </Container>
  );
};

export default EditProfilePage;
