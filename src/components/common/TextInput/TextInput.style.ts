import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const TextInputFlex = styled(Flex)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const ReportTitleSpan = styled.span`
  width: 90%;
  align-self: flex-start;
`;

export const ReportTextFlex = styled(Flex)`
  width: 90%;
  padding: 16px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black200};
  border-radius: 6px;
`;

export const ReportTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.black200};
  resize: none;
  border: none;
  outline: none;
  flex-grow: 1;
  cursor: auto;
  font-size: 14px;
  line-height: 20px;
`;

export const LengthSpan = styled.span`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.black700};
`;

export const ReportButton = styled(Button)`
  width: 90%;
  margin-top: auto;
  margin-bottom: 5px;
  padding: 20px 0;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black400 : theme.colors.primary1};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.black600 : theme.colors.black900)};
`;
