import { useForm } from 'react-hook-form';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  HeaderContainer,
  LeftIcon,
  Title,
  ToLogin,
  Form,
  InputContainer,
  Label,
  Input,
  EmailContainer,
  CheckboxWrapper,
  CheckboxIndicator,
  CheckboxContainer,
  CheckboxLabel,
  DetailsLink,
  SubmitButton,
  ErrorMessage,
  HintMessage,
  DuplicateCheckButton,
} from './SignUpPage.style.ts';
import SignUpCompletePopup from '../../components/popUp/SignUpCompletePopup.tsx';
import { PATH } from '@/constants/path';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

const SignUpPage = () => {
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
    navigate(PATH.EDIT_PROFILE('1'));
  };

  const checkEmailDuplicate = () => {
    console.log('이메일 중복 확인');
    setIsEmailChecked(true);
  };

  const checkAgreeButton = () => {
    console.log('동의 버튼 체크 확인');
    setIsAgreeChecked(true);
  };

  return (
    <Container>
      <HeaderContainer>
        <LeftIcon src="/src/assets/svg/left-icon.svg" alt="LeftIcon" onClick={() => navigate(-1)} />
        <Title>회원가입</Title>
        <ToLogin to="/sign-in">로그인</ToLogin>
      </HeaderContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            placeholder="이름을 입력해 주세요"
            {...register('name', { required: '이름을 입력해 주세요.' })}
            hasError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="email">이메일</Label>
          <EmailContainer>
            <Input
              id="email"
              placeholder="이메일을 입력해 주세요"
              {...register('email', {
                required: '이메일을 입력해 주세요.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: '올바른 이메일 형식이 아닙니다.',
                },
              })}
              hasError={!!errors.email}
            />
            <DuplicateCheckButton
              disabled={isEmailChecked}
              onClick={checkEmailDuplicate}
              variant="solid"
            >
              {isEmailChecked ? '확인 완료' : '중복 확인'}
            </DuplicateCheckButton>
          </EmailContainer>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            {...register('password', {
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/,
                message: '6-20자 이내 *영문 대소문자, 숫자, 특수문자 필수',
              },
            })}
            hasError={!!errors.password}
          />
          {errors.password ? (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          ) : (
            <HintMessage>6-20자 이내 *영문 대소문자, 숫자, 특수문자 필수</HintMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="confirmPassword">비밀번호 재입력</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요"
            {...register('confirmPassword', {
              required: '비밀번호를 재입력해 주세요.',
              validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
            })}
            hasError={!!errors.confirmPassword}
          />
          {errors.confirmPassword ? (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          ) : (
            <HintMessage>6-20자 이내 *영문 대소문자, 숫자, 특수문자 필수</HintMessage>
          )}
        </InputContainer>

        <CheckboxContainer>
          <CheckboxWrapper
            onClick={checkAgreeButton}
            disabled={isAgreeChecked}
            id="agreement"
            {...register('agreement', {
              required: '개인정보약관에 동의해야 합니다.',
            })}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </CheckboxWrapper>
          <CheckboxLabel htmlFor="agreement">개인정보약관에 동의합니다</CheckboxLabel>
          {errors.agreement && <ErrorMessage>{errors.agreement.message}</ErrorMessage>}
          <DetailsLink>자세히 보기</DetailsLink>
        </CheckboxContainer>

        <SubmitButton
          type="submit"
          disabled={!isValid || isSubmitting || !isEmailChecked || !isAgreeChecked}
          variant="solid"
        >
          완료
        </SubmitButton>
      </Form>
      {isModalOpen && <SignUpCompletePopup onClose={closePopup} />}
    </Container>
  );
};

export default SignUpPage;
