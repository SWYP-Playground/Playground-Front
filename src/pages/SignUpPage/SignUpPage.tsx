import styled from '@emotion/styled';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameWarning, setNameWaring] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  const [confirmPasswordWarning, setConfirmPasswordWarning] = useState('');

  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);

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

  // 비밀번호 유효성 검사
  const validatePassword = (password: string): void => {
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

  // 비밀번호 재입력 유효성 검사
  const validateConfirmPassword = (confirmPassword: string): void => {
    if (!confirmPassword) {
      setConfirmPasswordWarning('');
      return;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordWarning('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordWarning('');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setName(inputValue);
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
    validateConfirmPassword(confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);
    validateConfirmPassword(inputValue);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmitClick = (): void => {
    if (
      !name ||
      !!nameWarning ||
      !email ||
      !!emailWarning ||
      !!passwordWarning ||
      !!confirmPasswordWarning
    ) {
      console.log('입력 조건을 모두 충족해야 합니다.');
      return;
    }

    setIsSubmitClicked(true);
    setTimeout(() => {
      setIsSubmitClicked(false);
      navigate('/');
    }, 1000);
  };

  return (
    <Container>
      <HeaderContainer>
        <LeftIcon src="/src/assets/svg/left-icon.svg" alt="LeftIcon" onClick={() => navigate(-1)} />
        <Title>회원가입</Title>
        <ToHome to="/">로그인</ToHome>
      </HeaderContainer>

      <Form>
        <Label>
          이름
          <Input
            type="text"
            placeholder="이름을 입력해 주세요"
            value={name}
            onChange={handleNameChange}
            hasError={!!nameWarning}
          />
          <WarningMessageContainer>
            {nameWarning && <WarningMessage>{nameWarning}</WarningMessage>}
          </WarningMessageContainer>
        </Label>
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
            {passwordWarning ? (
              <WarningMessage>{passwordWarning}</WarningMessage>
            ) : (
              <HintMessage>6~20자 이내 *영문 대소문자, 숫자, 특수문자 필수</HintMessage>
            )}
          </WarningMessageContainer>
        </Label>
        <Label>
          비밀번호 재입력
          <Input
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            hasError={!!confirmPasswordWarning}
          />
          <WarningMessageContainer>
            {confirmPasswordWarning ? (
              <WarningMessage>{confirmPasswordWarning}</WarningMessage>
            ) : (
              <HintMessage>6~20자 이내 *영문 대소문자, 숫자, 특수문자 필수</HintMessage>
            )}
          </WarningMessageContainer>
        </Label>
        <CheckboxContainer>
          <RadixCheckbox
            id="terms"
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked === true)}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </RadixCheckbox>
          <CheckboxLabel htmlFor="terms">개인정보 약관에 동의합니다</CheckboxLabel>
          <DetailsLink href="/privacy-policy" target="_blank">
            자세히 보기
          </DetailsLink>
        </CheckboxContainer>
        <ButtonContainer>
          <SubmitButton
            type="button"
            isClicked={isSubmitClicked}
            onClick={handleSubmitClick}
            disabled={
              !name ||
              !!nameWarning ||
              !email ||
              !!emailWarning ||
              !!passwordWarning ||
              !!confirmPasswordWarning
            }
          >
            완료
          </SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default SignUpPage;

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

const HintMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.black500};
`;

const WarningMessageContainer = styled.div`
  min-height: 20px;
  margin-top: 5px;
`;

const WarningMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin-top: auto;
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.black800};
  font-weight: 500;
  cursor: pointer;
`;

const RadixCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.colors.black800};
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? props.theme.colors.black800 : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  align-items: center;
`;

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  color: white;
  font-size: 20px;
`;

const DetailsLink = styled.a`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black600};
  text-decoration: none;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.black300};
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
  margin-top: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: ${(props) => (props.disabled ? '1' : '0.8')};
  }
`;
