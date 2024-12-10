import styled from '@emotion/styled';
import { Flex } from '@radix-ui/themes';

export const FriendsPlayedFlex = styled(Flex)`
  height: calc(100dvh - 106px);
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 80px;

  background-color: ${(props) => props.theme.colors.black200};
`;

export const FriendsContainer = styled.div`
  width: 100%;

  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
