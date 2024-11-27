import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const PlayGroundSearchBarDiv = styled(Flex)`
  gap: 1rem;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  margin: 6px 0;
`;

export const SearchButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.black600};
`;
