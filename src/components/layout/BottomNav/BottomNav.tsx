import { useLocation, useNavigate } from 'react-router-dom';

import { NavButton, NavSpan, FooterNav } from '@/components/layout/BottomNav/BottomNav.style';
import { PATH } from '@/constants/path';
import HomeIcon from '@/assets/svg/home.svg?react';
import HomeFillIcon from '@/assets/svg/home-fill.svg?react';
import SearchIcon from '@/assets/svg/search.svg?react';
import SearchFillIcon from '@/assets/svg/search-fill.svg?react';
import CreateIcon from '@/assets/svg/create.svg?react';
import CreateFillIcon from '@/assets/svg/create-fill.svg?react';
import MessageIcon from '@/assets/svg/message.svg?react';
import MessageFillIcon from '@/assets/svg/message-fill.svg?react';
import ProfileIcon from '@/assets/svg/profile.svg?react';
import ProfileFillIcon from '@/assets/svg/profile-fill.svg?react';

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const NAV_ITEMS = [
    {
      id: 1,
      label: '홈',
      icon: <HomeIcon width="25" height="25" />,
      iconActive: <HomeFillIcon width="25" height="25" />,
      path: PATH.ROOT,
    },
    {
      id: 2,
      label: '놀이터 찾기',
      icon: <SearchIcon width="25" height="25" />,
      iconActive: <SearchFillIcon width="25" height="25" />,
      path: PATH.FIND_PLAYGROUND_FRIEND,
    },
    {
      id: 3,
      label: '모집글 등록',
      icon: <CreateIcon width="25" height="25" />,
      iconActive: <CreateFillIcon width="25" height="25" />,
      path: PATH.CREATE_PLAYGROUND,
    },
    {
      id: 4,
      label: '쪽지함',
      icon: <MessageIcon width="25" height="25" />,
      iconActive: <MessageFillIcon width="25" height="25" />,
      path: PATH.DIRECT_MESSAGE,
    },
    {
      id: 5,
      label: '내정보',
      icon: <ProfileIcon width="25" height="25" />,
      iconActive: <ProfileFillIcon width="25" height="25" />,
      path: PATH.PROFILE,
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <FooterNav>
      {NAV_ITEMS.map((item) => (
        <NavButton onClick={() => handleNavigation(item.path)}>
          {pathname === item.path ? item.iconActive : item.icon}
          <NavSpan>{item.label}</NavSpan>
        </NavButton>
      ))}
    </FooterNav>
  );
};

export default BottomNav;
