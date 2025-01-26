import styled from '@emotion/styled';
import { Avatar, Flex } from '@radix-ui/themes';

export const FriendMessageFlex = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${(props) => props.theme.colors.black300};
  }
`;

export const FriendMessageMain = styled(Flex)`
  width: 100%;
  height: 100%;

  border-radius: 16px;
  padding: 20px;
  flex-direction: row;
  gap: 11px;
`;

export const FriendMessageContent = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const FriendMessageDescription = styled.span<{ isSummary: boolean }>`
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

export const FriendMessageAvatar = styled(Avatar)``;

export const FriendMessageUser = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const FriendMessageNickname = styled.span`
  color: ${(props) => props.theme.colors.black800};
  font-weight: 600;
`;

export const FriendMessageInfo = styled.span`
  color: ${(props) => props.theme.colors.black600};
  font-size: 12px;
`;
