import styled from '@emotion/styled';
import { Button } from '@radix-ui/themes';

export const CreateRoomButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary1};
  display: 'inline-flex';
  width: '100%';
  height: '100%';
  padding: 6px 10px;
  border-radius: 999px;
  justify-content: 'center';
  align-items: 'center';
  gap: 4;
  color: ${(props) => props.theme.colors.black900};
  cursor: pointer;
`;
