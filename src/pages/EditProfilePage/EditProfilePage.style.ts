import CloseIcon from '@/assets/svg/cancel.svg?react';
import styled from '@emotion/styled';
import Pencil from '@/assets/svg/pencil.svg?react';
import Search from '@/assets/svg/search.svg?react';
import { Button } from '@radix-ui/themes';
import Plus from '@/assets/svg/plus.svg?react';

export const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 106px);
  max-width: 480px;
  margin: 0 auto;
`;

export const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DuplicateContainer = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const DuplicateCheckButton = styled(Button)`
  height: 44px;
  padding: 0 16px;
  font-weight: 600;
  white-space: nowrap;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.black400 : theme.colors.black800};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.black600 : theme.colors.black0)};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  align-items: center;
  justify-content: center;
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

  &:focus {
    border: 2px solid ${(props) => (props.hasError ? props.theme.colors.red : 'transparent')};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  display: flex;
  margin: 0 auto;

  justify-content: center;
  padding: 12px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  resize: none;
  background-color: ${(props) => props.theme.colors.black100};
  position: relative;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const DeleteButton = styled(CloseIcon)`
  width: 12px;

  fill: ${(props) => props.theme.colors.black600};
  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 100%;
  font-weight: 500;
  padding: 10px 20px;
  border: 1.5px solid ${(props) => props.theme.colors.black300};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black800};
  margin-top: 20px;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 50px;
  max-width: 400px;
  bottom: 16px;

  align-self: center;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black400 : theme.colors.primary1};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.black600 : theme.colors.black900)};
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.2s;
`;

export const ProfileImageContainer = styled.label`
  width: 150px;
  height: 40px;

  justify-content: center;
  align-items: center;

  display: flex;
  gap: 4px;
  padding: 8px;
  margin: 0 auto;

  white-space: nowrap;
  border: 1px solid ${(props) => props.theme.colors.black400};
  border-radius: 20px;
`;

export const PencilIcon = styled(Pencil)`
  color: ${(props) => props.theme.colors.black600};
`;

export const ProfileImageLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black800};
`;

export const ProfileImage = styled.label`
  width: 100px;
  height: 100px;

  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.black100};
  border: 1px solid ${(props) => props.theme.colors.black100};
  border-radius: 50%;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioButton = styled.input`
  width: 100%;

  margin-right: 5px;

  border: 2px solid ${(props) => props.theme.colors.black400};
  border-radius: 10px;
`;

export const ToggleChoiceButton = styled.input`
  width: 100%;

  margin-right: 5px;

  border: 2px solid ${(props) => props.theme.colors.black400};
  border-radius: 10px;
`;

export const HintMessage = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black500};
  margin-top: 5px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
  margin-top: 5px;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-30%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const HorizonLine = styled.div`
  width: 100%;
  height: 2px;

  margin: 15px 0;
  background-color: ${(props) => props.theme.colors.black300};
`;

export const Title = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`;

export const PlusIcon = styled(Plus)`
  width: 12px;
  color: ${(props) => props.theme.colors.black500};
  margin-right: 5px;
`;

export const TextLengthContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  font-size: 14px;
  color: ${(props) => props.theme.colors.black500};
`;

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Blue = styled.a`
  color: ${(props) => props.theme.colors.secondary};
`;
