import {
  PlayGroundItemContentAddress,
  PlayGroundItemContentDistance,
  PlayGroundItemContentFlex,
  PlayGroundItemContentName,
  PlayGroundItemFlex,
} from '@/components/playGround/PlayGroundItem/PlayGroundItem.style';
import VectorIcon from '@/assets/svg/vector.svg?react';

interface PlayGroundItemProps {
  name: string;
  address: string;
  distance?: string;
}

const PlayGroundItem = ({ name, address, distance }: PlayGroundItemProps) => {
  return (
    <PlayGroundItemFlex>
      <VectorIcon />
      <PlayGroundItemContentFlex>
        <PlayGroundItemContentName>{name}</PlayGroundItemContentName>
        <PlayGroundItemContentAddress>{address}</PlayGroundItemContentAddress>
        {distance && (
          <PlayGroundItemContentDistance>{distance}km 이내</PlayGroundItemContentDistance>
        )}
      </PlayGroundItemContentFlex>
    </PlayGroundItemFlex>
  );
};

export default PlayGroundItem;
