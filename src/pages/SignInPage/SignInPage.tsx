import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogInMutation } from '@/hooks/api/useLogInMutation';
import {
  Container,
  LogoContainer,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  BottomContainer,
  SubmitButton,
  Footer,
  FooterLink,
} from './SignInPage.style';
import Header from '@/components/layout/Header/Header';
import CancelIcon from '@/assets/svg/cancel.svg?react';
import LogoIcon from '@/assets/svg/logo-vertical.svg?react';
import { LoginRequestBody } from '@/types/user';
import { PATH } from '@/constants/path';

const SignInPage = () => {
  const navigate = useNavigate();
  const logInMutation = useLogInMutation();

  const logIn = logInMutation.mutate;
  const isLoading = logInMutation.status === 'pending';

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginRequestBody>({ mode: 'onChange' });

  const onSubmit = (data: LoginRequestBody) => {
    console.log(data);

    logIn(data, {
      onSuccess: () => {
        navigate(PATH.ROOT);
      },
    });
  };

  return (
    <Container>
      <Header rightIcon={<CancelIcon />} />
      <LogoContainer>
        <LogoIcon width={140} height={85} />
      </LogoContainer>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력해 주세요"
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '이메일 형식을 확인해주세요.',
              },
            })}
            hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            aria-invalid={errors.password ? 'true' : 'false'}
            {...register('password', {
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/,
                message: '6-20자 이내 * 영문 대소문자 및 숫자, 특수문자 필수',
              },
            })}
            hasError={!!errors.password}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </FormGroup>

        <BottomContainer>
          <SubmitButton type="submit" disabled={!isValid || isLoading}>
            {isLoading ? '로딩 중' : '로그인'}
          </SubmitButton>

          <Footer>
            <FooterLink to="/sign-up">회원가입</FooterLink>
            <FooterLink to="/find-account">계정찾기</FooterLink>
          </Footer>
        </BottomContainer>
      </Form>
    </Container>
  );
};

export default SignInPage;
