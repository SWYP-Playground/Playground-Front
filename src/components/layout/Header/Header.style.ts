import styled from '@emotion/styled';

export const HeaderStyling = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  background-color: ${(props) => props.theme.colors.black0};
  z-index: 50;
`;

export const HeaderDiv = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
