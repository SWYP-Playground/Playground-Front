import { Button, Flex } from '@radix-ui/themes';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;
  height: calc(100dvh - 106px);
  max-width: 480px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.black100};
`;

export const SendMessageButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0;
  margin-top: auto;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.primary1};
  cursor: pointer;
`;

export const ExtraImageContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;
