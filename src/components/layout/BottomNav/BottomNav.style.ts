import styled from '@emotion/styled';

export const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  position: fixed;
  width: 100%;
  height: 56px;
  bottom: 0;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.black0};
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
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

export const NavButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavSpan = styled.span`
  color: ${(props) => props.theme.colors.black800};
  font-size: 11px;
  margin-top: 2px;
  font-weight: 500;
  word-wrap: break-word;
`;
