import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useSignUpStore } from '@/store/signUpStore';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

export const useSignUpForm = () => {
  const navigate = useNavigate();
  const { setSignUpData } = useSignUpStore();

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

  const onSubmit = async (data: FormData) => {
    try {
      setSignUpData({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      console.log('SignUp Data Saved to Zustand:', {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      setIsModalOpen(true);
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
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
