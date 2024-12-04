import styled from '@emotion/styled';
import { Button, Dialog, RadioGroup } from '@radix-ui/themes';

export const TemperatureModalContent = styled(Dialog.Content)`
  padding: 20px;
  align-items: center;
`;

export const TemperatureModalTitle = styled(Dialog.Title)`
  padding: 15px;
  align-items: center;
`;

export const CompleteButton = styled(Button)`
  width: 100%;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.black600 : theme.colors.black900)};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black400 : theme.colors.primary1};
`;

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &[data-state='checked'] {
    span {
      font-weight: bold; /* 선택된 상태일 때 텍스트 강조 */
    }
  }
`;
