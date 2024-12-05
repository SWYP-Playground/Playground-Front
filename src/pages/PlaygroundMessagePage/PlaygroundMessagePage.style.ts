import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const PlayGroundRoomFlex = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: calc(100dvh - 106px);
  flex: 1;
`;

export const SendMessageButton = styled(Button)`
  width: 90%;
  padding: 30px 0;
  font-size: 18px;
  font-weight: 600;
  margin-top: auto;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.primary1};
  cursor: pointer;
`;

export const BottomSheetTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black900};
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`;
