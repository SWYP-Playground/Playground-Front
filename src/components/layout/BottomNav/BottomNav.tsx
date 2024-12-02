import { NavButton, NavSpan, FooterNav } from '@/components/layout/BottomNav/BottomNav.style';
import SearchIcon from '@/assets/svg/search.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const BottomNav = () => {
  const navigate = useNavigate();

  // 일단 임시적으로 상수를 설정하였습니다. 나중에 수정 해야함
  const NAV_ITEMS = [
    { id: 1, label: '홈', icon: <SearchIcon width="25" height="25" />, path: PATH.ROOT },
    {
      id: 2,
      label: '놀이터 찾기',
      icon: <SearchIcon width="25" height="25" />,
      path: PATH.FIND_PLAYGROUND_FRIEND,
    },
    {
      id: 3,
      label: '모집글 등록',
      icon: <SearchIcon width="25" height="25" />,
      path: PATH.CREATE_PLAYGROUND,
    },
    {
      id: 4,
      label: '쪽지함',
      icon: <SearchIcon width="25" height="25" />,
      path: PATH.DIRECT_MESSAGE('22'),
    },
    {
      id: 5,
      label: '내정보',
      icon: <SearchIcon width="25" height="25" />,
      path: PATH.PROFILE('22'),
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <FooterNav>
      {NAV_ITEMS.map((item) => (
        <NavButton onClick={() => handleNavigation(item.path)}>
          {item.icon}
          <NavSpan>{item.label}</NavSpan>
        </NavButton>
      ))}
    </FooterNav>
  );
};

export default BottomNav;
