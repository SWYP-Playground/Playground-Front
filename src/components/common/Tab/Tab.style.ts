import styled from '@emotion/styled';

export const TabRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  color: ${({ theme }) => theme.colors.black700};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black400};
  font-weight: 700;
  cursor: pointer;
`;

export const TabsList = styled.div<{ isActive: boolean }>`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  align-items: center;
  border-bottom-width: 1px;

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-bottom: 3px solid ${theme.colors.black800};
    color: ${theme.colors.black900};
  `}
`;
