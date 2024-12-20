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
import { useState, useEffect } from 'react';
import { getParentById } from '@/api/parent/getParentById';
import getDecodedTokenData from '@/utils/getDecodedTokenData';

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

// 전화번호 포맷팅 함수
const formatPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.length === 11) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
  }
  return phoneNumber;
};

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { parentId } = getDecodedTokenData();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nickname: '',
      phoneNumber: '',
      address: '',
      parentGender: '',
      parentBirthDate: '',
      children: [{ gender: '', birthDate: '' }],
      friendCriteria: '',
      introduction: '',
      additionalPhoto: null,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'children',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const data = await getParentById(Number(parentId));
        console.log('data', data);

        reset({
          nickname: data.nickname,
          phoneNumber: formatPhoneNumber(data.phoneNumber),
          address: data.address,
          parentGender: data.role === 'MOTHER' ? '엄마' : '아빠',
          parentBirthDate: data.birthDate,
          children: data.children.map((child) => ({
            gender: child.gender,
            birthDate: child.birthDate,
          })),
          friendCriteria: '가까운 거리',
          introduction: data.introduce || '',
          additionalPhoto: null,
        });

        setValue('parentGender', data.role === 'MOTHER' ? '엄마' : '아빠');
        setValue('parentBirthDate', data.birthDate);
      } catch (err) {
        console.error('사용자 데이터를 불러오는 중 오류 발생:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [parentId, reset, setValue]);

  const onSubmit = (data: FormData) => {
    const finalData = {
      ...data,
      parentGender: data.parentGender === '엄마' ? 'MOTHER' : 'FATHER',
    };
    console.log('finalData:', finalData);
    navigate(PATH.PROFILE(parentId));
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

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
          onFileChange={(file) => reset((prev) => ({ ...prev, additionalPhoto: file }))}
          onChange={(key, value) => reset((prev) => ({ ...prev, [key]: value }))}
        />
        <FamilyInfoSection
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
          onChange={(key, value) => reset((prev) => ({ ...prev, [key]: value }))}
        />
        <AdditionalInfoSection
          register={register}
          errors={errors}
          onChange={(key, value) => reset((prev) => ({ ...prev, [key]: value }))}
        />
        <SubmitButton type="submit">완료</SubmitButton>
      </Form>
    </Container>
  );
};

export default EditProfilePage;
