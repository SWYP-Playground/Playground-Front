import styled from '@emotion/styled';
import { Button } from '@radix-ui/themes';

export const SendButton = styled(Button)`
  width: 90%;
  padding: 24px;
  font-size: 16px;
  font-weight: 600;
  align-self: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.primary1};
  margin-top: auto;
  margin-bottom: 24px;
`;
