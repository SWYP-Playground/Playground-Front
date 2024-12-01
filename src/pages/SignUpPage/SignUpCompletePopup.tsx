import styled from '@emotion/styled';
import { Button } from '@radix-ui/themes';

interface SignUpCompletePopupProps {
  onClose: () => void;
}

const SignUpCompletePopup = ({ onClose }: SignUpCompletePopupProps) => {
  return (
    <PopupContainer>
      <PopupContent>
        <Logo src="/src/assets/svg/logo-vertical.svg" alt="Playground Logo" />
        <Title>가입 완료</Title>
        <Description>
          프로필을 작성하고
          <br /> 친구들을 찾아보세요!
        </Description>
        <SubmitButton onClick={onClose} variant="solid">
          프로필 작성하기
        </SubmitButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default SignUpCompletePopup;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  max-width: 320px;
  width: 80%;
  height: 440px;
  background: white;
  border-radius: 12px;
  padding: 60px 30px;
  text-align: center;
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  color: ${(props) => props.theme.colors.black900};

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.4px;
  margin-bottom: 40px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.black900};

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: -0.4px;
  text-align: center;
  white-space: pre-line;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 50px;

  background-color: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.black900};

  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 60px;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary1};
  }
`;
