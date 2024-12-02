import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 106px);
  background-color: ${(props) => props.theme.colors.black0};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin: 70px 0;
`;

export const Logo = styled.img`
  width: 140px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 360px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 40px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.black800};
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.colors.black100};
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.colors.red : 'transparent')};
  border-radius: 8px;
  font-size: 14px;
  outline: none;
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.red};
  margin-top: 4px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 20px 0;
`;

export const SubmitButton = styled.button`
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

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const FooterLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black900};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
