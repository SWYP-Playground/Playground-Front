import styled from '@emotion/styled';
import { Flex } from '@radix-ui/themes';

export const PageContainer = styled(Flex)`
  flex-direction: column;
  height: calc(100dvh - 106px);
  overflow-y: hidden;
`;

export const SearchBarWrapper = styled(Flex)`
  position: sticky;
  top: 0; /* 스크롤 시 상단에 고정 */
  z-index: 10;
  background-color: white;
  padding: 16px;
`;

export const PlayGroundItemFlex = styled(Flex)`
  flex-direction: column;
  width: calc(100% - 32px);
  align-self: center;
  flex: 1;
  overflow-y: auto;
`;
