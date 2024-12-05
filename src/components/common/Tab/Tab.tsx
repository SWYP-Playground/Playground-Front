import { DIRECT_MESSAGE } from '@/constants/message';
import { useTab } from '@/hooks/common/useTab';
import { TabRoot, TabsList } from '@/components/common/Tab/Tab.style';

const Tab = () => {
  const { tab, setTab } = useTab();

  const onClickRecruitment = () => {
    setTab(DIRECT_MESSAGE.RECRUITMENT);
  };

  const onClickFriend = () => {
    setTab(DIRECT_MESSAGE.FRIEND);
  };

  return (
    <TabRoot>
      <TabsList onClick={onClickRecruitment} isActive={tab === DIRECT_MESSAGE.RECRUITMENT}>
        {DIRECT_MESSAGE.RECRUITMENT}
      </TabsList>
      <TabsList onClick={onClickFriend} isActive={tab === DIRECT_MESSAGE.FRIEND}>
        {DIRECT_MESSAGE.FRIEND}
      </TabsList>
    </TabRoot>
  );
};

export default Tab;
