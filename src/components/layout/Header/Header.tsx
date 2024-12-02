import {
  HeaderDiv,
  HeaderStyling,
  LeftDiv,
  RightDiv,
  Title,
} from '@components/layout/Header/Header.style';

interface HeaderProps {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode | string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const Header = ({ title, leftIcon, rightIcon, onLeftClick, onRightClick }: HeaderProps) => {
  return (
    <HeaderStyling>
      <HeaderDiv>
        <LeftDiv>{leftIcon && <button onClick={onLeftClick}>{leftIcon}</button>}</LeftDiv>
        <Title>{title}</Title>
        <RightDiv>{rightIcon && <button onClick={onRightClick}>{rightIcon}</button>}</RightDiv>
      </HeaderDiv>
    </HeaderStyling>
  );
};

export default Header;
