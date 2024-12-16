import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Badge } from '@radix-ui/themes';

import { StatusType } from '@/types/friend';

export const StatusBadgeStyling = styled(Badge)<{ status: StatusType }>`
  padding: 4px 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;

  ${({ status, theme }) => {
    switch (status) {
      case 'COMPLETE':
        return css`
          background-color: ${theme.colors.black200};
          color: ${theme.colors.black700};
        `;
      case 'PLAYING':
        return css`
          background-color: ${theme.colors.black0};
          color: ${theme.colors.secondary};
          border: 1px solid ${theme.colors.secondary};
        `;
      case 'RECRUITING':
        return css`
          background-color: #e7f1ff;
          color: ${theme.colors.secondary};
        `;
      default:
        return '';
    }
  }}
`;
