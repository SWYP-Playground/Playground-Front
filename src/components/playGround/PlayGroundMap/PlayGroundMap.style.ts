import styled from '@emotion/styled';
import { Button } from '@radix-ui/themes';

export const PlayGroundMapDiv = styled.div`
  position: relative;
  width: 100%;
  height: calc(100dvh - 46px);
  min-height: 200px;
  overflow: hidden;
`;

export const CurrentPositionButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
