import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Container, Form, SubmitButton } from './CreateProfilePage.style.ts';
import ProfileImageSection from '@/components/profile/EditProfile/ProfileImageSection.tsx';
import FamilyInfoSection from '@/components/profile/EditProfile/FamilyInfoSection.tsx';
import AdditionalInfoSection from '@/components/profile/EditProfile/AdditionalInfoSection.tsx';
import ExtraImageSection from '@/components/profile/EditProfile/ExtraImageSection.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path.ts';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import CloseIcon from '@/assets/svg/cancel.svg?react';
import { useSignUpStore } from '@/store/signUpStore';
import { useSignUpMutation } from '@/hooks/api/useSignUpMutation';
import Header from '@/components/layout/Header/Header.tsx';
interface ChildInfo {
  gender: string;
  birthDate: string;
}

interface FormData {
  nickname: string;
  address: string;
  phoneNumber: string;
  introduce: string;
  birthDate: string;
  role: string;
  childCount: number;
  children: ChildInfo[];
}

const CreateProfilePage = () => {
  const navigate = useNavigate();
  const signUpMutation = useSignUpMutation();
  const { name, email, password } = useSignUpStore.getState();

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [formValues, setFormValues] = useState<{
    nickname: string;
    phoneNumber: string;
    address: string;
    role: string;
    introduce: string;
    gender?: string;
    birthDate?: string;
    children: { gender: string; birthDate: string }[];
  }>({
    nickname: '',
    phoneNumber: '',
    address: '',
    role: '',
    introduce: '',
    children: [],
  });

  // 디버깅
  // useEffect(() => {
  //   console.log('Updated formValues:', formValues);
  // }, [formValues]);

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

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    // 파일 데이터 추가
    if (profileImage) {
      formData.append('file', profileImage);
    } else {
      const defaultFile = new File(['default'], 'default.png', { type: 'image/png' });
      formData.append('file', defaultFile);
    }

    const sanitizedPhoneNumber = formValues.phoneNumber.replace(/-/g, '');

    // JSON 데이터 합치기
    const payload = {
      name,
      email,
      password,
      nickname: formValues.nickname,
      address: formValues.address,
      role: formValues.role,
      birthDate: formValues.birthDate || data.birthDate,
      phoneNumber: sanitizedPhoneNumber,
      childCount: formValues.children.length,
      introduce: formValues.introduce,
      children: formValues.children.map((child, index) => ({
        gender: child.gender,
        birthDate: child.birthDate || data.children[index]?.birthDate,
      })),
    };

    console.log('Payload:', payload);

    formData.append('data', JSON.stringify(payload));

    // 서버 요청
    signUpMutation.mutate(formData, {
      onSuccess: () => {
        console.log('회원가입 성공');
        navigate(PATH.ROOT);
      },
      onError: (error) => {
        console.error('회원가입 실패:', error);
      },
    });
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
        <ProfileImageSection
          register={register}
          errors={errors}
          onFileChange={(file) => setProfileImage(file)}
          onChange={(key, value) => setFormValues((prev) => ({ ...prev, [key]: value }))}
        />
        <FamilyInfoSection
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
          onChange={(key, value) => {
            // console.log(`Key: ${key}, Value: ${value}`);
            setFormValues((prev) => ({ ...prev, [key]: value }));
          }}
        />
        <AdditionalInfoSection
          register={register}
          errors={errors}
          onChange={(key, value) => setFormValues((prev) => ({ ...prev, [key]: value }))}
        />
        <ExtraImageSection isEditable={true} />
        <SubmitButton type="submit">완료</SubmitButton>
      </Form>
    </Container>
  );
};

export default CreateProfilePage;
