import { Flex } from '@radix-ui/themes';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import {
  CancelEngageButton,
  EngageButton,
  MessageButton,
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

const PlaygroundRoomPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { playgroundId } = params;
  const { FindFriendInfoData } = useFindFriendInfoQuery(Number(playgroundId));
  const participateFindFriendMutation = useParticipateFindFriendMutation();
  const { nickname } = getDecodedTokenData();

  const goToBackPage = () => {
    navigate(-1);
  };

  const isParticipated = FindFriendInfoData.participants.some(
    (participant) => participant.nickname === nickname,
  );

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

  return (
    <PlayGroundRoomFlex>
      <Header
        title={FindFriendInfoData.playgroundName}
        leftIcon={<LeftIcon />}
        onLeftClick={goToBackPage}
      />
      <PlayGroundMap />
      <PlayGroundRoomContent
        status={FindFriendInfoData.recruitmentStatus}
        title={FindFriendInfoData.title}
        description={FindFriendInfoData.description}
        location={FindFriendInfoData.playgroundName}
        playTime={FindFriendInfoData.scheduleTime}
      />
      <Card
        nickname={FindFriendInfoData.owner.nickname}
        status={FindFriendInfoData.owner.role}
        address={FindFriendInfoData.owner.address}
        image={FindFriendInfoData.owner.profileImg}
      />
      <PlayGroundRoomParticipants>
        <ParticipantsSpan>현재 참여 인원</ParticipantsSpan>
        {FindFriendInfoData.participants.length > 0 &&
          FindFriendInfoData.participants.map((item) => (
            <PlayGroundParticipant image={item.profileImg} nickname={item.nickname} />
          ))}
        {FindFriendInfoData.participants.length === 0 && <div>참여 인원 없음</div>}
      </PlayGroundRoomParticipants>
      <ParticipantsButtonFlex>
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
            {/* 나중에 작성자면 삭제하기 버튼 추가 */}
          </Flex>
        )}
      </ParticipantsButtonFlex>
    </PlayGroundRoomFlex>
  );
};

export default PlaygroundRoomPage;
