import {
  PlayGroundItemContentAddress,
  PlayGroundItemContentDistance,
  PlayGroundItemContentFlex,
  PlayGroundItemContentName,
  PlayGroundItemFlex,
} from '@/components/playGround/PlayGroundItem/PlayGroundItem.style';
import VectorIcon from '@/assets/svg/vector.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

interface PlayGroundItemProps {
  name: string;
  playgroundId: string;
  address?: string;
  distance?: string;
}

const PlayGroundItem = ({ name, playgroundId, address, distance }: PlayGroundItemProps) => {
  const navigate = useNavigate();

  const goPlaygroundRoomList = () => {
    navigate(PATH.PLAYGROUND_ROOM_LIST(playgroundId));
  };

  return (
    <PlayGroundItemFlex onClick={goPlaygroundRoomList}>
      <VectorIcon />
      <PlayGroundItemContentFlex>
        <PlayGroundItemContentName>{name}</PlayGroundItemContentName>
        <PlayGroundItemContentAddress>{address}</PlayGroundItemContentAddress>
        {distance && <PlayGroundItemContentDistance>{distance} 이내</PlayGroundItemContentDistance>}
      </PlayGroundItemContentFlex>
    </PlayGroundItemFlex>
  );
};

export default PlayGroundItem;
