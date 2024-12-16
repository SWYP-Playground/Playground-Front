import styled from '@emotion/styled';
import { Avatar, Flex } from '@radix-ui/themes';

export const CardFlex = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 8px 16px;
`;

export const CardMain = styled(Flex)`
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.black100};
  border-radius: 16px;
  padding: 20px;
  flex-direction: column;
  gap: 11px;
`;

export const CardHeader = styled(Flex)`
  justify-content: space-between;
`;

export const CardContent = styled.span<{ isSummary: boolean }>`
  color: ${(props) => props.theme.colors.black800};
  font-size: 15px;

  ${({ isSummary }) =>
    isSummary &&
    `
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
  `}
`;

export const CardAvatar = styled(Avatar)``;

export const CardUser = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

export const CardNickname = styled.span`
  color: ${(props) => props.theme.colors.black800};
  font-weight: 600;
`;

export const CardInfo = styled.span`
  color: ${(props) => props.theme.colors.black600};
  font-size: 14px;
`;
