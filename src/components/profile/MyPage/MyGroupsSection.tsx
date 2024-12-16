import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import { PATH } from '@/constants/path';
import { FindFriendRoomType } from '@/types/friend.ts';
import { useNavigate } from 'react-router-dom';

interface MyGroupsSectionProps {
  requireData: FindFriendRoomType[];
}
const MyGroupsSection = ({ requireData }: MyGroupsSectionProps) => {
  const navigate = useNavigate();

  const goToPlaygroundMessage = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_MESSAGE(playgroundId));
  };

  return (
    <>
      {requireData.map((item) => (
        <RequirementRoom
          key={item.findFriendId}
          onClick={goToPlaygroundMessage(String(item.findFriendId))}
          status={item.recruitmentStatus}
          currentCount={item.currentCount}
          title={item.title}
          description={item.description || ''}
          playgroundName={item.playgroundName || ''}
          playTime={item.scheduleTime}
        />
      ))}
    </>
  );
};

export default MyGroupsSection;
