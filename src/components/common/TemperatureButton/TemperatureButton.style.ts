import styled from '@emotion/styled';
import { Button } from '@radix-ui/themes';

export const TemperatureButtonStyling = styled(Button)`
  width: 90%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black900};
  background-color: ${({ theme }) => theme.colors.black0};
  border: 1px solid ${({ theme }) => theme.colors.black300};
  padding: 20px 0;
  border-radius: 8px;
`;

export const TemperatureSpan = styled.span`
  font-size: 16px;
`;
