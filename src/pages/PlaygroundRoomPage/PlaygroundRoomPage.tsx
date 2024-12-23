import { Flex } from '@radix-ui/themes';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import {
  CancelEngageButton,
  DeleteButton,
  EngageButton,
  MessageButton,
  ModifyButton,
  ParticipantsButtonFlex,
  ParticipantsSpan,
  PlayGroundRoomFlex,
  PlayGroundRoomParticipants,
} from '@/pages/PlaygroundRoomPage/PlaygroundRoomPage.style';
import PlayGroundMap from '@/components/playGround/PlayGroundMap/PlayGroundMap';
import PlayGroundRoomContent from '@/components/playGround/PlayGroundRoomContent/PlayGroundRoomContent';
import Card from '@/components/common/Card/Card';
import PlayGroundParticipant from '@/components/playGround/PlayGroundParticipant/PlayGroundParticipant';
import { PATH } from '@/constants/path';
import { useFindFriendInfoQuery } from '@/hooks/api/useFindFriendInfoQuery';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import { useParticipateFindFriendMutation } from '@/hooks/api/useParticipateFindFriendMutation';
import { PARTICIPATE_ACTION } from '@/constants/playground';
import getDecodedTokenData from '@/utils/getDecodedTokenData';
import { useDeleteRoomMutation } from '@/hooks/api/useDeleteRoomMutation';
import { useEffect, useState } from 'react';
import { usePlaygroundsQuery } from '@/hooks/api/usePlaygroundsQuery';

const PlaygroundRoomPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { playgroundId } = params;
  const { FindFriendInfoData } = useFindFriendInfoQuery(Number(playgroundId));
  const { playgroundsData } = usePlaygroundsQuery(String(FindFriendInfoData?.playgroundName));
  const [nickname, setNickname] = useState<string | null>(null);
  const participateFindFriendMutation = useParticipateFindFriendMutation();
  const deleteRoomMutation = useDeleteRoomMutation();

  useEffect(() => {
    const decodedTokenData = getDecodedTokenData();
    if (decodedTokenData) {
      setNickname(decodedTokenData.nickname);
    } else {
      navigate(PATH.SIGNIN);
    }
  }, [navigate]);

  if (!FindFriendInfoData) {
    return <div>로딩 중...</div>;
  }

  if (!nickname) {
    return <div>로딩 중...</div>;
  }

  const isParticipated = FindFriendInfoData?.participants.some(
    (participant) => participant.nickname === nickname,
  );
  const isManager = FindFriendInfoData?.owner.nickname === nickname;

  const goToBackPage = () => {
    navigate(-1);
  };

  const handleParticipate = () => {
    if (playgroundId) {
      participateFindFriendMutation.mutate({
        playgroundId,
        findFriendId: FindFriendInfoData.findFriendId,
        action: PARTICIPATE_ACTION.PARTICIPATE,
      });
    }
  };

  const handleCancelParticipation = () => {
    if (playgroundId) {
      participateFindFriendMutation.mutate({
        playgroundId,
        findFriendId: FindFriendInfoData.findFriendId,
        action: PARTICIPATE_ACTION.CANCEL,
      });
    }
  };

  const handleModifyRoom = () => {
    const findFriendId = String(FindFriendInfoData.findFriendId);
    if (playgroundId && findFriendId) {
      navigate({
        pathname: PATH.CREATE_PLAYGROUND,
        search: createSearchParams({
          playgroundId: playgroundId,
          findFriendId: findFriendId,
        }).toString(),
      });
    }
  };

  const handleDeleteRoom = () => {
    if (playgroundId) {
      deleteRoomMutation.mutate({
        playgroundId,
        findFriendId: FindFriendInfoData.findFriendId,
      });
    }
  };

  return (
    <PlayGroundRoomFlex>
      <Header
        title={FindFriendInfoData.playgroundName}
        leftIcon={<LeftIcon />}
        onLeftClick={goToBackPage}
      />
      <PlayGroundMap playgroundsData={playgroundsData} />
      <PlayGroundRoomContent
        status={FindFriendInfoData.recruitmentStatus}
        title={FindFriendInfoData.title}
        description={FindFriendInfoData.description}
        location={FindFriendInfoData.playgroundName}
        playTime={FindFriendInfoData.scheduleTime}
      />
      <Card
        onClick={() => navigate(PATH.PROFILE_INFO(String(FindFriendInfoData.owner.id)))}
        nickname={FindFriendInfoData.owner.nickname}
        status={FindFriendInfoData.owner.role}
        address={FindFriendInfoData.owner.address}
        image={FindFriendInfoData.owner.profileImg}
      />
      <PlayGroundRoomParticipants>
        <ParticipantsSpan>현재 참여 인원</ParticipantsSpan>
        {FindFriendInfoData.participants.length > 0 &&
          FindFriendInfoData.participants.map((item) => (
            <PlayGroundParticipant
              image={item.profileImg}
              nickname={item.nickname}
              onClick={() => navigate(PATH.PROFILE_INFO(String(item.id)))}
            />
          ))}
        {FindFriendInfoData.participants.length === 0 && <div>참여 인원 없음</div>}
      </PlayGroundRoomParticipants>
      <ParticipantsButtonFlex>
        {!isManager && (
          <>
            {!isParticipated && <EngageButton onClick={handleParticipate}>참여하기</EngageButton>}
            {isParticipated && (
              <Flex direction="column" gap="2">
                <MessageButton
                  onClick={() => navigate(PATH.PLAYGROUND_MESSAGE(`${params.playgroundId}`))}
                >
                  댓글 보기
                </MessageButton>
                <CancelEngageButton onClick={handleCancelParticipation}>
                  참여하기 취소
                </CancelEngageButton>
              </Flex>
            )}
          </>
        )}
        {isManager && (
          <Flex direction="column" gap="2">
            <MessageButton
              onClick={() => navigate(PATH.PLAYGROUND_MESSAGE(`${params.playgroundId}`))}
            >
              댓글 보기
            </MessageButton>
            <ModifyButton onClick={handleModifyRoom}>수정하기</ModifyButton>
            <DeleteButton onClick={handleDeleteRoom}>삭제하기</DeleteButton>
          </Flex>
        )}
      </ParticipantsButtonFlex>
    </PlayGroundRoomFlex>
  );
};

export default PlaygroundRoomPage;
