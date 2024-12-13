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
import LeftIcon from '@assets/svg/left-icon.svg?react';
import PlayGroundMap from '@/components/playGround/PlayGroundMap/PlayGroundMap';
import PlayGroundRoomContent from '@/components/playGround/PlayGroundRoomContent/PlayGroundRoomContent';
import Card from '@/components/common/Card/Card';
import PlayGroundParticipant from '@/components/playGround/PlayGroundParticipant/PlayGroundParticipant';
import { Flex } from '@radix-ui/themes';
import { useState } from 'react';
import { PATH } from '@/constants/path';

const imsiParticipantData = [
  {
    image:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    nickname: '닉네임1',
  },
  {
    image:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    nickname: '닉네임2',
  },
];

const PlaygroundRoomPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isParticipated, setIsParticipated] = useState(false);

  const goToBackPage = () => {
    navigate(-1);
  };

  return (
    <PlayGroundRoomFlex>
      <Header title="모임글 제목" leftIcon={<LeftIcon />} onLeftClick={goToBackPage} />
      <PlayGroundMap />
      <PlayGroundRoomContent
        status="모집 중"
        title="내일 서리풀 놀이터에서 놀 친구 구해요"
        description="안녕하세요 저는 6살 애기 아빠이고, 서초구 방배동에 살고 있어요. 잘 부탁드려요."
        location="서리풀 상상나라 숲속학교 놀이터"
        playTime="2024.11.24 금요일 · 오후 3:00~4:00"
      />
      <Card
        nickname="닉네임"
        status="아빠"
        address="서울시 노원구 중계동"
        image="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
      />
      <PlayGroundRoomParticipants>
        <ParticipantsSpan>현재 참여 인원</ParticipantsSpan>
        {imsiParticipantData.map((item) => (
          <PlayGroundParticipant image={item.image} nickname={item.nickname} />
        ))}
      </PlayGroundRoomParticipants>
      <ParticipantsButtonFlex>
        {!isParticipated && (
          <EngageButton onClick={() => setIsParticipated(true)}>참여하기</EngageButton>
        )}
        {isParticipated && (
          <Flex direction="column" gap="2">
            <MessageButton
              onClick={() => navigate(PATH.PLAYGROUND_MESSAGE(`${params.playgroundId}`))}
            >
              쪽지함 보기
            </MessageButton>
            <CancelEngageButton onClick={() => setIsParticipated(false)}>
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
