import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const PlayGroundRoomFlex = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: calc(100dvh - 106px);
  gap: 16px;
  flex: 1;
`;

export const PlayGroundRoomParticipants = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  gap: 16px;
  flex: 1;
`;

export const ParticipantsSpan = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParticipantsButtonFlex = styled.span`
  width: 100%;
  padding: 20px 16px;
  margin-top: auto;
`;

export const EngageButton = styled(Button)`
  width: 100%;
  padding: 26px 0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.primary1};
  cursor: pointer;
`;

export const MessageButton = styled(Button)`
  width: 100%;
  padding: 26px 0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.black0};
  border: 1px solid ${({ theme }) => theme.colors.black900};
  cursor: pointer;
`;

export const CancelEngageButton = styled(Button)`
  width: 100%;
  padding: 26px 0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black0};
  background-color: #ee6363;
  cursor: pointer;
`;
