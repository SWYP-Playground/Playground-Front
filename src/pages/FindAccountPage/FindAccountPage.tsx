import styled from '@emotion/styled';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FindAccountPage = () => {
  const [email, setEmail] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [isFindClicked, setIsFindClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  // 이메일 유효성 검사
  const validateEmail = (email: string): void => {
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const handleFindClick = (): void => {
    if (!emailWarning && email) {
      setIsFindClicked(true);
      setTimeout(() => {
        setIsFindClicked(false);
        console.log('계정 찾기 실행');
      }, 2000);
    } else {
      console.log('유효하지 않은 이메일');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <HeaderContainer>
        <LeftIcon src="/src/assets/svg/left-icon.svg" alt="LeftIcon" onClick={() => navigate(-1)} />
        <Title>계정찾기</Title>
        <ToHome to="/">홈으로</ToHome>
      </HeaderContainer>

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
        <ButtonContainer>
          <FindButton
            type="button"
            isClicked={isFindClicked}
            onClick={handleFindClick}
            disabled={!email || !!emailWarning}
          >
            찾기
          </FindButton>
          <FooterLinkContainer>
            <FooterLink to="/sign-up">회원가입</FooterLink>
          </FooterLinkContainer>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FindAccountPage;

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
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 8px 22px;
  margin-bottom: 30px;
`;

const LeftIcon = styled.img`
  width: 8px;
  position: flex;
  justify-content: flex-start;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.p`
  justify-content: center;
  font-size: 18px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.black900};
  margin-left: 20px;
`;

const ToHome = styled(Link)`
  font-weight: 400;
  color: ${(props) => props.theme.colors.black900};
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
const ButtonContainer = styled.div`
  width: 100%;
  margin-top: auto;
`;

interface FindButtonProps {
  isClicked: boolean;
}

const FindButton = styled.button<FindButtonProps>`
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
  margin-top: 10px;
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
