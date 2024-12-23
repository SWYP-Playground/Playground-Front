import DaumPostcodeEmbed from 'react-daum-postcode';
import styled from '@emotion/styled';
import CloseIcon from '@/assets/svg/cancel.svg?react';

interface AddressSearchModalProps {
  onComplete: (data: any) => void;
  onClose: () => void;
}

const AddressSearchModal = ({ onComplete, onClose }: AddressSearchModalProps) => {
  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <ButtonContainer onClick={onClose}>
          <DeleteButton />
        </ButtonContainer>
        <DaumPostcodeEmbed onComplete={onComplete} style={{ height: '400px' }} />
      </Container>
    </Overlay>
  );
};

export default AddressSearchModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  z-index: 100;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.button`
  width: 100%;
  display: flex;
  justify-content: end;
  background: none;
  border: none;
  padding: 4px;
`;

export const DeleteButton = styled(CloseIcon)`
  width: 12px;
  fill: ${(props) => props.theme.colors.black400};
  margin-right: -4px;
  cursor: pointer;
`;
