import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import Header from '@/components/layout/Header/Header';
import { PATH } from '@/constants/path';
import { useFindFriendListQuery } from '@/hooks/api/useFindFriendListQuery';
import {
  CreatePlayGroundRoomButton,
  PlayGroundRoomListFlex,
} from '@/pages/PlaygroundRoomListPage/PlaygroundRoomListPage.style';
import LeftIcon from '@assets/svg/left-icon.svg?react';

const PlaygroundRoomListPage = () => {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const name = searchParams.get('name');
  const params = useParams();
  const { playgroundId } = params;
  const { FindFriendListData } = useFindFriendListQuery(String(playgroundId));

  const goToBack = () => {
    navigate(-1);
  };

  const goToPlayGroundRoom = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_ROOM(playgroundId));
  };

  const goToCreatePlaygroundPage = () => {
    if (name) {
      navigate({
        pathname: PATH.CREATE_PLAYGROUND,
        search: createSearchParams({
          playgroundName: name,
        }).toString(),
      });
    }
  };

  return (
    <PlayGroundRoomListFlex>
      <Header title="모집글 목록" leftIcon={<LeftIcon />} onLeftClick={goToBack} />
      {FindFriendListData &&
        FindFriendListData.map((item) => (
          <RequirementRoom
            onClick={goToPlayGroundRoom(String(item.findFriendId))}
            title={item.title}
            description={item.description}
            status={item.recruitmentStatus}
            currentCount={item.currentCount}
            playTime={item.scheduleTime}
          />
        ))}
      <CreatePlayGroundRoomButton onClick={goToCreatePlaygroundPage}>
        모집글 등록하기
      </CreatePlayGroundRoomButton>
    </PlayGroundRoomListFlex>
  );
};

export default PlaygroundRoomListPage;
