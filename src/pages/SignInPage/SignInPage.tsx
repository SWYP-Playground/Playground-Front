<<<<<<< HEAD
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  // 이메일 유효성 검사
  const validateEmail = (email: string) => {
    if (!email) {
      setEmailWarning('');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailWarning('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailWarning('');
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordWarning('');
      return;
    }
    const lengthValid = password.length >= 6 && password.length <= 20;
    const combinationValid =
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!lengthValid) {
      setPasswordWarning('비밀번호는 최소 6자리에서 최대 20자리여야 합니다.');
    } else if (!combinationValid) {
      setPasswordWarning('비밀번호는 영어 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.');
    } else {
      setPasswordWarning('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    validatePassword(inputValue);
  };

  const handleLogin = () => {
    if (!emailWarning && !passwordWarning) {
      console.log('Login attempt:', { email, password });
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        navigate('/');
      }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
=======
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  HeaderContainer,
  CancelButton,
  LogoContainer,
  Logo,
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
>>>>>>> c712966e9de5c69167202eee7f7f0f78d7bf757f
  };

  return (
    <Container>
      <HeaderContainer>
<<<<<<< HEAD
        <CancelIcon src="/src/assets/svg/cancel.svg" alt="Cancel" />
=======
        <CancelButton src="/src/assets/svg/cancel.svg" />
>>>>>>> c712966e9de5c69167202eee7f7f0f78d7bf757f
      </HeaderContainer>
      <LogoContainer>
        <Logo src="/src/assets/svg/logo-vertical.svg" alt="Playground Logo" />
      </LogoContainer>
<<<<<<< HEAD
      <Form onSubmit={handleSubmit}>
        <Label>
          이메일
          <Input
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={handleEmailChange}
            hasError={!!emailWarning}
          />
          <WarningMessageContainer>
            {emailWarning && <WarningMessage>{emailWarning}</WarningMessage>}
          </WarningMessageContainer>
        </Label>
        <Label>
          비밀번호
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={handlePasswordChange}
            hasError={!!passwordWarning}
          />
          <WarningMessageContainer>
            {passwordWarning && <WarningMessage>{passwordWarning}</WarningMessage>}
          </WarningMessageContainer>
        </Label>
        <BottomContainer>
          <SubmitButton
            type="submit"
            disabled={!email || !password || !!emailWarning || !!passwordWarning}
            isClicked={isClicked}
          >
            로그인
          </SubmitButton>
          <FooterLinkContainer>
            <FooterLink to="/sign-up">회원가입</FooterLink>
            <FooterLink to="/find-account">계정찾기</FooterLink>
          </FooterLinkContainer>
=======
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
>>>>>>> c712966e9de5c69167202eee7f7f0f78d7bf757f
        </BottomContainer>
      </Form>
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black0};
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-right: 40px;
`;

const CancelIcon = styled.img`
  position: flex;
  justify-content: flex-end;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
`;

const Logo = styled.img`
  width: 140px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? props.theme.colors.red : 'transparent')};
  border-radius: 8px;

  color: ${(props) => props.theme.colors.black800};
  background-color: ${(props) => props.theme.colors.black100};

  font-size: 14px;
  margin-top: 10px;

  &:focus {
    border: 2px solid ${(props) => (props.hasError ? props.theme.colors.red : 'transparent')};
    outline: none;
  }
`;

const WarningMessageContainer = styled.div`
  min-height: 20px;
  margin-top: 5px;
`;

const WarningMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
  margin: 0;
`;

const BottomContainer = styled.div`
  margin-top: auto;
`;

interface SubmitButtonProps {
  isClicked: boolean;
}

const SubmitButton = styled.button<SubmitButtonProps>`
  width: 100%;
  height: 50px;
  padding: 16px 0;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.black200 : props.theme.colors.primary1};
  color: ${(props) => (props.disabled ? props.theme.colors.black400 : props.theme.colors.black900)};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 80px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: ${(props) => (props.disabled ? '1' : '0.8')};
  }
`;

const FooterLinkContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const FooterLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black900};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
