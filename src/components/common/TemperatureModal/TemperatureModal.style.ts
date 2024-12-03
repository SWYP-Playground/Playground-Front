import styled from '@emotion/styled';
import { Button, Dialog } from '@radix-ui/themes';

export const TemperatureModalContent = styled(Dialog.Content)`
  padding: 20px;
  align-items: center;
`;

export const TemperatureModalTitle = styled(Dialog.Title)`
  padding: 20px;
  align-items: center;
`;

export const CompleteButton = styled(Button)`
  width: 100%;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.primary1};
`;
