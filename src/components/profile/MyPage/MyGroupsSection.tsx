import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

interface MyGroupsSectionProps {
  requireData: {
    playgroundId: string;
    status: string;
    currentCount: number;
    title: string;
    description?: string;
    playgroundName?: string;
    playTime: string;
  }[];
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
          key={item.playgroundId}
          onClick={goToPlaygroundMessage(item.playgroundId)}
          status={item.status}
          currentCount={item.currentCount}
          title={item.title}
          description={item.description || ''}
          playgroundName={item.playgroundName || ''}
          playTime={item.playTime}
        />
      ))}
    </>
  );
};

export default MyGroupsSection;
