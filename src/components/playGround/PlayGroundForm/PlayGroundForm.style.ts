import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';
import { Button as AntdButton } from 'antd-mobile';

export const PlayGroundFormFlex = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  padding: 16px;
`;

export const PlayGroundFormElement = styled(Flex)`
  flex-direction: column;
  gap: 4px;
`;

export const PlayGroundFormLabel = styled.label`
  font-size: 14px;
`;

export const PlayGroundFormTitleInput = styled.input`
  color: ${({ theme }) => theme.colors.black800};
  background-color: ${({ theme }) => theme.colors.black100};
  border: none;
  outline: none;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 6px;
`;

export const PlayGroundFormDropDown = styled(Flex)`
  width: 100%;
  font-size: 8px;
  gap: 6px;
`;

export const PlayGroundFormContentFlex = styled(Flex)`
  padding: 16px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black100};
  border-radius: 6px;
`;

export const PlayGroundFormContentTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.black100};
  resize: none;
  border: none;
  outline: none;
  flex-grow: 1;
  cursor: auto;
  font-size: 14px;
  line-height: 20px;
`;

export const PlayGroundFormContentLength = styled.span`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.black700};
`;

export const PlayGroundFormSubmitButton = styled(Button)`
  margin-top: auto;
  padding: 30px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.black600 : theme.colors.black900)};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black400 : theme.colors.primary1};
`;

export const DropdownButton = styled(AntdButton)`
  display: flex !important;
  align-items: center !important;
  padding: 12px 16px !important;
  border: none !important;
  border-radius: 8px !important;
  color: ${({ theme }) => theme.colors.black800} !important;
  font-size: 14px !important;
  box-shadow: none !important;
  width: 100% !important;
  height: 50px !important;
  background-color: ${({ theme }) => theme.colors.black100} !important;

  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
