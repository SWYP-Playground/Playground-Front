import {
  HeaderDiv,
  HeaderStyling,
  LeftDiv,
  RightDiv,
  TitleDiv,
} from '@components/layout/Header/Header.style';

interface HeaderProps {
  title: string;
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
        <TitleDiv>{title}</TitleDiv>
        <RightDiv>{rightIcon && <button onClick={onRightClick}>{rightIcon}</button>}</RightDiv>
      </HeaderDiv>
    </HeaderStyling>
  );
};

export default Header;
