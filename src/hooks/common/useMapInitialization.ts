import { useEffect } from 'react';
import { PlaygroundData } from '@/types/playground';
import { CenterType } from './useLocationTracking';

interface UseMapInitializationProps {
  playgroundsData?: PlaygroundData[];
  currentPosition: CenterType;
  hasCoords: boolean;
  moveToCenter: (center: CenterType) => void;
}

export const useMapInitialization = ({
  playgroundsData,
  currentPosition,
  hasCoords,
  moveToCenter,
}: UseMapInitializationProps) => {
  useEffect(() => {
    const initializeMapCenter = () => {
      // 놀이터 데이터가 있으면 첫 번째 놀이터 중심으로
      if (playgroundsData && playgroundsData.length > 0) {
        const firstPlayground = playgroundsData[0];
        const center = {
          lat: Number(firstPlayground.latitude),
          lng: Number(firstPlayground.longitude),
        };
        moveToCenter(center);
        return;
      }

      // 사용자 위치가 있으면 해당 위치 중심으로
      if (hasCoords) {
        moveToCenter(currentPosition);
      }
    };

    initializeMapCenter();
  }, [playgroundsData, currentPosition, hasCoords, moveToCenter]);
};
