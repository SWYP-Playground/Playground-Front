import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

export const useSignUpForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const password = watch('password');

  const onSubmit = (data: FormData) => {
    console.log('회원가입 데이터:', data);
    setIsModalOpen(true);
  };

  const closePopup = () => {
    setIsModalOpen(false);
    navigate(PATH.CREATE_PROFILE);
  };

  const checkEmailDuplicate = () => {
    console.log('이메일 중복 확인');
    setIsEmailChecked(true);
  };

  const checkAgreeButton = () => {
    console.log('동의 버튼 체크 확인');
    setIsAgreeChecked(true);
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    isEmailChecked,
    isAgreeChecked,
    isModalOpen,
    onSubmit,
    closePopup,
    checkEmailDuplicate,
    checkAgreeButton,
    password,
  };
};
