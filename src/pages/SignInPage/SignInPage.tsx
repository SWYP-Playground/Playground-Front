import styled from '@emotion/styled';
import { useState } from 'react';
import { useEffect } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleLogin = (): void => {
    console.log('Login attempt:', { email, password });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleLogin();
  };

  const handleCancel = (): void => {
    console.log('Cancel button clicked');
  };

  const handleButtonClick = (): void => {
    console.log('Button Clicked');
    setIsClicked(true);
    console.log('isClicked:', isClicked);
    setTimeout(() => {
      setIsClicked(false);
      console.log('isClicked reset:', isClicked);
    }, 2000);
  };

  useEffect(() => {
    console.log('isClicked changed:', isClicked);
  }, [isClicked]);

  return (
    <Container>
      <CancelIcon src="/src/assets/svg/cancel.svg" alt="Cancel" onClick={handleCancel} />
      <LogoContainer>
        <Logo src="/src/assets/svg/logo-vertical.svg" alt="Playground Logo" />
      </LogoContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          이메일
          <Input
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={handleEmailChange}
          />
        </Label>
        <Label>
          비밀번호
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={handlePasswordChange}
          />
        </Label>
        <SubmitButton
          type="submit"
          disabled={!email || !password}
          isClicked={isClicked}
          onClick={handleButtonClick}
        >
          로그인
        </SubmitButton>
        <FooterLinkContainer>
          <FooterLink>회원가입</FooterLink>
          <FooterLink>계정찾기</FooterLink>
        </FooterLinkContainer>
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

const CancelIcon = styled.img`
  width: 16px;
  position: absolute;
  top: 0px;
  right: 10px;
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
  gap: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  border: none;
  border-radius: 5px;

  color: ${(props) => props.theme.colors.black800};
  background-color: ${(props) => props.theme.colors.black100};

  font-size: 14px;
  margin-top: 10px;
`;

interface SubmitButtonProps {
  isClicked: boolean;
}

const SubmitButton = styled.button<SubmitButtonProps>`
  width: 100%;
  height: 50px;
  padding: 16px 0;
  background-color: ${(props) =>
    props.isClicked ? props.theme.colors.primary1 : props.theme.colors.black400};
  color: ${(props) =>
    props.isClicked ? props.theme.colors.black900 : props.theme.colors.black600};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 100px;
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.colors.black200};
    cursor: not-allowed;
  }
`;

const FooterLinkContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const FooterLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black900};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
