import styled from '@emotion/styled';
import { Button } from '@radix-ui/themes';

export const PlayGroundButtonStyling = styled(Button)`
  position: fixed;
  display: flex;
  bottom: 96px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 25px;
  width: calc(100% - 40px);
  max-width: 500px;
  font-size: 16px;
  z-index: 1000;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.black900};
  background-color: ${(props) => props.theme.colors.primary1};
`;
