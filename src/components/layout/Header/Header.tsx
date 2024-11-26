import { HeaderDiv, HeaderStyling } from '@components/layout/Header/Header.style';

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
        {leftIcon && <button onClick={onLeftClick}>{leftIcon}</button>}
        <div>{title}</div>
        {rightIcon && <button onClick={onRightClick}>{rightIcon}</button>}
      </HeaderDiv>
    </HeaderStyling>
  );
};

export default Header;
