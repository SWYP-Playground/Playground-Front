import styled from '@emotion/styled';
import { Flex } from '@radix-ui/themes';

export const PlayGroundItemFlex = styled(Flex)`
  width: 100%;
  gap: 8px;
  padding: 12px 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${(props) => props.theme.colors.black500};
  }
`;

export const PlayGroundItemContentFlex = styled(Flex)`
  flex-direction: column;
  gap: 4px;
`;

export const PlayGroundItemContentName = styled.span`
  font-size: 15px;
  font-weight: 500;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.black800};
`;

export const PlayGroundItemContentAddress = styled.span`
  font-size: 13px;
  font-weight: 500;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.black600};
`;

export const PlayGroundItemContentDistance = styled.span`
  font-size: 11px;
  font-weight: 500;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.black600};
`;
