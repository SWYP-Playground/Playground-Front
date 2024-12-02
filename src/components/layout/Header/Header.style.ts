import styled from '@emotion/styled';

export const HeaderStyling = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  background-color: ${(props) => props.theme.colors.black0};
  z-index: 50;

  @media (min-width: 768px) {
    max-width: 768px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
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

export const Title = styled.p`
  display: flex;
  grid-column: span 2 / span 2;
  font-size: 18px;
  font-weight: 900;
  justify-content: center;
  color: ${(props) => props.theme.colors.black900};
`;

export const RightDiv = styled.div`
  margin-left: auto;
`;
