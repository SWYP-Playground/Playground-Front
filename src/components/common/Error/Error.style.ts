import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const ErrorFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  flex: 1;
`;

export const ErrorMessage = styled.span`
  font-size: 30px;
  font-weight: 800;
`;

export const ErrorButton = styled(Button)`
  font-weight: 600;
  margin-top: 20px;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px #e9b035;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.black900};
`;
