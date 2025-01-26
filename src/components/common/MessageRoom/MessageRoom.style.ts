import styled from '@emotion/styled';
import { Avatar, Flex } from '@radix-ui/themes';

export const MessageRoomFlex = styled(Flex)<{ isCurrentUser: boolean }>`
  flex-direction: ${({ isCurrentUser }) => (isCurrentUser ? 'row-reverse' : 'row')};
  align-items: center;
  width: 100%;
  overflow: auto;
  gap: 12px;
`;

export const MessageRoomAvatar = styled(Avatar)`
  cursor: pointer;
`;

export const MessageRoomContent = styled.div<{ isCurrentUser: boolean }>`
  display: inline-block;
  align-items: center;
  border-radius: 15px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.black100};
  max-width: 70%; /* 글씨가 너무 길어지지 않도록 제한 */
  min-width: fit-content; /* 최소 너비를 텍스트 길이에 맞게 조정 */
  word-wrap: break-word; /* 긴 단어도 줄바꿈 */
  word-break: break-word; /* 단어가 너무 길 경우 줄바꿈 */

  ${({ isCurrentUser, theme }) =>
    isCurrentUser &&
    `
    color:${theme.colors.black0};
    background-color:${theme.colors.secondary};
  `}
`;

export const MessageRoomRead = styled.div`
  display: flex;
  align-items: end;
  font-size: 12px;
  margin: 0 6px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const MessageRoomTime = styled.div<{ isCurrentUser: boolean }>`
  width: 100%;
  padding: 8px 0 0 0;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.black700};
  min-width: fit-content; /* 최소 너비를 텍스트 길이에 맞게 조정 */
  word-wrap: break-word; /* 긴 단어도 줄바꿈 */
  word-break: break-word; /* 단어가 너무 길 경우 줄바꿈 */

  ${({ isCurrentUser }) =>
    isCurrentUser &&
    `
    text-align: right;
  `}
`;
