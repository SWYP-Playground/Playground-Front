import styled from '@emotion/styled';
import Pencil from '/src/assets/svg/pencil.svg?react';
import Search from '/src/assets/svg/search.svg?react';
import { Button } from '@radix-ui/themes';

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
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
`;

export const CancelButton = styled.img`
  background: none;
  border: none;
  font-size: 20px;

  color: ${(props) => props.theme.colors.black900};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
  margin-top: 20px;
`;

export const DuplicateContainer = styled.div`
  display: flex;
  gap: 10px;
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

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  margin-right: 5px;
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
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.primary2};
  }
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

export const SearchIcon = styled(Search)`
  width: 20px;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
`;
