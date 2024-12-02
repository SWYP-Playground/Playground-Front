import styled from '@emotion/styled';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';

export const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 106px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black0};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 8px 22px;
  margin-bottom: 30px;
`;

export const LeftIcon = styled.img`
  width: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.black900};
  margin-left: 40px;
`;

export const ToLogin = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black900};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  border-radius: 5px;

  color: ${(props) => props.theme.colors.black800};
  background-color: ${(props) => props.theme.colors.black100};

  font-size: 14px;
  margin-top: 10px;

  &:focus {
    border: 2px solid ${(props) => (props.hasError ? props.theme.colors.red : 'transparent')};
    outline: none;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DuplicateCheckButton = styled(Button)`
  height: 44px;
  padding: 0 16px;
  font-weight: 600;
  white-space: nowrap;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.black400 : theme.colors.black800};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.black600 : theme.colors.black0)};
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.primary2};
  }
`;

export const CheckboxWrapper = styled(Checkbox.Root)`
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.colors.black800};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.black800};
  color: white;
  width: 100%;
  height: 100%;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
`;

export const DetailsLink = styled.a`
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  color: ${(props) => props.theme.colors.black600};
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 4px;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  width: calc(100% - 32px);
  height: 50px;
  max-width: 400px;
  bottom: 16px;

  align-self: center;
  margin-top: auto;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black400 : theme.colors.primary1};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.black600 : theme.colors.black900)};
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.2s;

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.primary2};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
  margin-top: 5px;
`;

export const HintMessage = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black500};
  margin-top: 5px;
`;
