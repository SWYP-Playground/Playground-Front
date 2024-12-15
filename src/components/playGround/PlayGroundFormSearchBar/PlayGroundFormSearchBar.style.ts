import styled from '@emotion/styled';
import { Button, Flex } from '@radix-ui/themes';

export const FormSearchFlex = styled(Flex)`
  position: relative;
`;

export const FormSearchInputFlex = styled(Flex)`
  position: relative;
  background-color: ${(props) => props.theme.colors.black100};
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin: 6px 0;
  border-radius: 8px;
`;

export const FormSearchInput = styled.input`
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

export const FormSearchButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.black100};
  cursor: pointer;
`;

export const FormAlertName = styled.div`
  color: ${(props) => props.theme.colors.black600};
  font-size: 13px;
  font-weight: 500;
  align-self: flex-start;
`;

export const SuggestionFlex = styled(Flex)`
  overflow: hidden;
  position: absolute;
  margin-top: 3.5rem;
  border: 1px solid ${(props) => props.theme.colors.black800};
  border-radius: 6px;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.black100};
  z-index: 10;
  cursor: pointer;
`;
