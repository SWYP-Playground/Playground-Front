import Card from '@/components/common/Card/Card';
import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import Tab from '@/components/common/Tab/Tab';
import Header from '@/components/layout/Header/Header';
import { DIRECT_MESSAGE } from '@/constants/message';
import { PATH } from '@/constants/path';
import { useTab } from '@/hooks/common/useTab';
import { DirectMessageFlex } from '@/pages/DirectMessagePage/DirectMessagePage.style';
import { useNavigate } from 'react-router-dom';

const requireData = [
  {
    playgroundId: '25',
    status: '모집 중',
    currentCount: 2,
    title: '내일 서리풀 놀이터에서 놀 친구 구해요',
    description: '안녕하세요 저는 6살 애기 아빠이고, 서초구에서 살..',
    playTime: '11.24 금요일·오후 3:00~4:00',
  },
];

const cardData = [
  {
    friendId: '22',
    nickname: '닉네임',
    status: '아빠',
    address: '서울시 노원구 중계동',
    image:
      'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
    content: '쪽지 내용입니다.',
  },
];

const DirectMessagePage = () => {
  const navigate = useNavigate();
  const { tab } = useTab();

  const goToPlaygroundMessage = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_MESSAGE(playgroundId));
  };

  const goToFriendMessage = (userId: string) => () => {
    navigate(PATH.FRIEND_MESSAGE(userId));
  };

  return (
    <DirectMessageFlex>
      <Header title="쪽지함" />
      <Tab />
      {tab === DIRECT_MESSAGE.RECRUITMENT &&
        requireData.map((items) => (
          <RequirementRoom
            onClick={goToPlaygroundMessage(items.playgroundId)}
            status={items.status}
            currentCount={items.currentCount}
            title={items.title}
            description={items.description}
            playTime={items.playTime}
          />
        ))}
      {tab === DIRECT_MESSAGE.FRIEND &&
        cardData.map((items) => (
          <Card
            onClick={goToFriendMessage(items.friendId)}
            nickname={items.nickname}
            status={items.status}
            address={items.address}
            image={items.image}
            content={items.content}
          />
        ))}
    </DirectMessageFlex>
  );
};

export default DirectMessagePage;
