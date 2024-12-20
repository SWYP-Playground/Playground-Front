import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const PlayGroundRoomListFlex = styled(Flex)`
  flex-direction: column;
  height: calc(100dvh - 106px);
  flex: 1;
`;

export const CreatePlayGroundRoomButton = styled(Button)`
  margin-top: auto;
  align-self: center;
  width: 90%;
  padding: 30px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.primary1};
  cursor: pointer;
`;
