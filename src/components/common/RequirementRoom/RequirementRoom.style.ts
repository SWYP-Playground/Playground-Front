import { css } from '@emotion/react';
import { Flex } from '@radix-ui/themes';

import styled from '@emotion/styled';
import { StatusType } from '@/types/friend';

export const RequirementFlex = styled(Flex)`
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 20px 16px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;
    right: 16px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.black300};
  }
`;

export const RequirementHeader = styled(Flex)`
  align-items: center;
  gap: 8px;
`;

export const RequirementJoin = styled.span<{ status: StatusType }>`
  font-size: 14px;
  font-weight: 600;

  ${({ status, theme }) => {
    switch (status) {
      case 'COMPLETE':
        return css`
          color: ${theme.colors.black700};
        `;
      case 'PLAYING':
      case 'RECRUITING':
        return css`
          color: ${theme.colors.secondary};
        `;
      default:
        return '';
    }
  }}
`;

export const RequirementTitle = styled.span`
  font-weight: 500;
`;

export const RequirementDescription = styled.span`
  font-size: 15px;
  color: ${(props) => props.theme.colors.black500};
`;

export const PlaygroundDetails = styled(Flex)`
  gap: 8px;
`;

export const RequirementTime = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.black500};
`;

export const RequirementPlaygroundName = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.black500};
`;
