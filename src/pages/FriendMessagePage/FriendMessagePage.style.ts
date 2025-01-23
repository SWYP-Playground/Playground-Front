import styled from '@emotion/styled';
import { Flex } from '@radix-ui/themes';

export const FriendMessageFlex = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: calc(100dvh - 106px);
  align-items: center;
  flex: 1;
`;

export const MessageFlex = styled(Flex)`
  position: relative;
  flex-direction: column;
  width: 100%;
  padding: 20px 16px;
  gap: 8px;
`;
