import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    console.log('Login Data:', data);

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <Container>
      <HeaderContainer>
        <CancelButton src="/src/assets/svg/cancel.svg" />
      </HeaderContainer>
      <LogoContainer>
        <Logo src="/src/assets/svg/logo-vertical.svg" alt="Playground Logo" />
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
          <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
            로그인
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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black0};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`;

const CancelButton = styled.img`
  background: none;
  border: none;
  font-size: 20px;

  color: ${(props) => props.theme.colors.black900};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const LogoContainer = styled.div`
  margin: 40px 0;
`;

const Logo = styled.img`
  width: 140px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.black800};
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.colors.black100};
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.colors.red : 'transparent')};
  border-radius: 8px;
  font-size: 14px;
  outline: none;
`;

const ErrorMessage = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.red};
  margin-top: 4px;
`;

const BottomContainer = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 20px 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black400 : theme.colors.primary1};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.black600 : theme.colors.black900)};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? '1' : '0.8')};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const FooterLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black900};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
