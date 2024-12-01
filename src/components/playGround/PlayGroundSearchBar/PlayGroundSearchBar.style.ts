import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const PlayGroundSearchFlex = styled(Flex)`
  width: 100%;
  padding: 8px 16px;
`;

export const PlayGroundSearchBarForm = styled.form`
  position: relative;
  background-color: ${(props) => props.theme.colors.black100};
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  margin: 6px 0;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 16px 12px 16px;
  border: 0px;
  background-color: ${(props) => props.theme.colors.black100};
  font-size: 15px;
  border-radius: 8px;

  &::placeholder {
    color: ${(props) => props.theme.colors.black600};
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.black100};
  cursor: pointer;
`;

export const AlertName = styled.div`
  color: ${(props) => props.theme.colors.black600};
  font-size: 13px;
  font-weight: 500;
`;
