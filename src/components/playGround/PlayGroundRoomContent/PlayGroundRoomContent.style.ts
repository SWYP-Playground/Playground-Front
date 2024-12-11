import styled from '@emotion/styled';
import { Flex } from '@radix-ui/themes';

export const PlayGroundRoomContentStyling = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  gap: 6px;
`;

export const PlayGroundRoomTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black800};
`;

export const PlayGroundRoomDescription = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black800};
`;

export const PlayGroundRoomContentBottom = styled(Flex)`
  margin: 10px 0;
  flex-direction: column;
  gap: 4px;
`;

export const PlayGroundRoomLocation = styled(Flex)`
  gap: 8px;
  align-items: center;
`;

export const PlayGroundRoomLocationSpan = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black600};
`;

export const PlayGroundRoomTime = styled(Flex)`
  gap: 8px;
  align-items: center;
`;

export const PlayGroundRoomTimeSpan = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black600};
`;
