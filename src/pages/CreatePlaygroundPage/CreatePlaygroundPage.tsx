import { useNavigate, useSearchParams } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import CancelIcon from '@assets/svg/cancel.svg?react';
import PlayGroundForm from '@/components/playGround/PlayGroundForm/PlayGroundForm';
import { CreatePlaygroundFlex } from '@/pages/CreatePlaygroundPage/CreatePlaygroundPage.style';
import { useFindFriendInfoQuery } from '@/hooks/api/useFindFriendInfoQuery';

const CreatePlaygroundPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const playgroundId = searchParams.get('playgroundId');
  const findFriendId = searchParams.get('findFriendId');
  const { FindFriendInfoData } = useFindFriendInfoQuery(Number(playgroundId));

  const goToBackPage = () => {
    navigate(-1);
  };

  const formProps = FindFriendInfoData
    ? {
        findFriendId: String(findFriendId) ?? '',
        title: FindFriendInfoData.title,
        playgroundName: FindFriendInfoData.playgroundName,
        descriptionValue: FindFriendInfoData.description,
        scheduleTime: FindFriendInfoData.scheduleTime,
      }
    : {};

  return (
    <CreatePlaygroundFlex direction="column">
      <Header
        title="모집글 등록"
        leftIcon={<LeftIcon />}
        onLeftClick={goToBackPage}
        rightIcon={<CancelIcon />}
        onRightClick={goToBackPage}
      />
      <PlayGroundForm {...formProps} />
    </CreatePlaygroundFlex>
  );
};

export default CreatePlaygroundPage;
