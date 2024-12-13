import styled from '@emotion/styled';

interface DeletePopupProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonColor?: string;
  textColor?: string;
  onClick: () => void;
  onClose: () => void;
}

const DeletePopup = ({
  title,
  subtitle,
  buttonText,
  buttonColor,
  textColor,
  onClick,
  onClose,
}: DeletePopupProps) => {
  return (
    <PopupContainer onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button buttonColor={buttonColor} textColor={textColor} onClick={onClick}>
          {buttonText}
        </Button>
      </Content>
    </PopupContainer>
  );
};

export default DeletePopup;

const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  width: 300px;
  height: 250px;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.black900};
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black700};
  margin-bottom: 16px;
`;

const Button = styled.button<{ buttonColor?: string; textColor?: string }>`
  width: 100%;
  padding: 12px 16px;

  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.textColor || props.theme.colors.black0};
  background-color: ${(props) => props.buttonColor || props.theme.colors.tertiary};
  cursor: pointer;
`;
