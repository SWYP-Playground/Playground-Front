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
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  padding: 0 16px;
`;

export const LeftDiv = styled.div`
  margin-right: auto;
`;

export const TitleDiv = styled.div`
  display: flex;
  grid-column: span 2 / span 2;
  justify-content: center;
`;

export const RightDiv = styled.div`
  margin-left: auto;
`;
