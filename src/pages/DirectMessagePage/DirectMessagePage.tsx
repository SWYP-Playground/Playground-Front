import { useNavigate } from 'react-router-dom';

import RequirementRoom from '@/components/common/RequirementRoom/RequirementRoom';
import Tab from '@/components/common/Tab/Tab';
import Header from '@/components/layout/Header/Header';
import { DIRECT_MESSAGE } from '@/constants/message';
import { PATH } from '@/constants/path';
import { useAllNoteQuery } from '@/hooks/api/useAllNoteQuery';
import { useMyFindFriendListQuery } from '@/hooks/api/useMyFindFriendListQuery';
import { useTab } from '@/hooks/common/useTab';
import { DirectMessageFlex } from '@/pages/DirectMessagePage/DirectMessagePage.style';
import { useEffect, useState } from 'react';
import getDecodedTokenData from '@/utils/getDecodedTokenData';
import { getUniqueDataByTargetNickname } from '@/utils/getUniqueWrittenBy';
import FriendMessage from '@/components/common/FriendMessage/FriendMessage';

const DirectMessagePage = () => {
  const navigate = useNavigate();
  const { tab } = useTab();
  const { MyFindFriendListData } = useMyFindFriendListQuery();
  const { AllNoteData } = useAllNoteQuery();
  const MessageRoom = [...AllNoteData].reverse();
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    try {
      const decodedTokenData = getDecodedTokenData();
      setNickname(decodedTokenData.nickname);
    } catch (error) {
      console.error(error);
      navigate(PATH.SIGNIN);
    }
  }, [navigate]);

  const goToPlaygroundMessage = (playgroundId: string) => () => {
    navigate(PATH.PLAYGROUND_MESSAGE(playgroundId));
  };

  const goToFriendMessage = (noteId: string) => () => {
    navigate(PATH.FRIEND_MESSAGE(noteId));
  };

  return (
    <DirectMessageFlex>
      <Header title="쪽지함" />
      <Tab />
      {tab === DIRECT_MESSAGE.RECRUITMENT &&
        MyFindFriendListData.map((item) => (
          <RequirementRoom
            onClick={goToPlaygroundMessage(String(item.findFriendId))}
            status={item.recruitmentStatus}
            currentCount={item.currentCount}
            title={item.title}
            description={item.description}
            playTime={item.scheduleTime}
          />
        ))}
      {tab === DIRECT_MESSAGE.FRIEND &&
        nickname &&
        getUniqueDataByTargetNickname({ data: MessageRoom, nickname: nickname }).map((item) => (
          <FriendMessage
            onClick={goToFriendMessage(item.writtenBy)}
            id={String(item.writerId)}
            content={item.content}
            isSummary={true}
          />
        ))}
    </DirectMessageFlex>
  );
};

export default DirectMessagePage;
