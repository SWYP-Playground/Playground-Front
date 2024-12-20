import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 106px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black0};
  padding: 0 16px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 0;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
`;

export const Input = styled.input<{ hasError: boolean }>`
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

export const WarningMessageContainer = styled.div`
  min-height: 20px;
  margin-top: 5px;
`;

export const WarningMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
  margin: 0;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: auto;
  justify-content: center;
`;

export const FindButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 16px 0;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.black400 : props.theme.colors.primary1};
  color: ${(props) => (props.disabled ? props.theme.colors.black600 : props.theme.colors.black900)};
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

export const FooterLinkContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const FooterLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black900};
  text-decoration: none;
  margin-bottom: 17px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ServerMessageContainer = styled.div`
  display: flex;
`;

export const ServerMessage = styled.p`
  font-size: 14px;
  padding: 6px;
`;
