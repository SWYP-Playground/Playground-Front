import styled from '@emotion/styled';
import { Flex } from '@radix-ui/themes';

export const PlayGroundParticipantFlex = styled(Flex)`
  align-items: center;
  gap: 12px;
`;

export const PlayGroundParticipantSpan = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black800};
`;
