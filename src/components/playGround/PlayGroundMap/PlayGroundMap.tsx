import { useCallback } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

import useKakaoLoader from '@/hooks/common/useKakaoLoader';
import { MAP_INITIAL_ZOOM_LEVEL } from '@/constants/map';
import { useLocationTracking } from '@/hooks/common/useLocationTracking';
import { useMapState } from '@/hooks/common/useMapState';
import { useMapInitialization } from '@/hooks/common/useMapInitialization';
import { usePlaygroundInfo } from '@/hooks/common/usePlaygroundInfo';
import {
  CurrentPositionButton,
  PlayGroundMapDiv,
} from '@/components/playGround/PlayGroundMap/PlayGroundMap.style';
import { PlaygroundData } from '@/types/playground';
import playerMarkerUrl from '@/assets/svg/player-marker.svg';
import CrossHair from '@/assets/svg/crosshair.svg?react';
import playgroundMarkerUrl from '@/assets/svg/playground-marker.svg';

interface PlayGroundMapProps {
  playgroundsData?: PlaygroundData[];
}

const PlayGroundMap = ({ playgroundsData }: PlayGroundMapProps) => {
  useKakaoLoader();

  // 각 관심사별로 분리된 커스텀 훅들
  const { currentPosition, coords, locationError } = useLocationTracking();
  const { mapCenter, mapRef, moveToCenter } = useMapState();
  const { selectedPlaygroundName, selectPlayground } = usePlaygroundInfo();

  // 맵 초기화 (놀이터 데이터나 사용자 위치 기반)
  useMapInitialization({
    playgroundsData,
    currentPosition,
    hasCoords: Boolean(coords.latitude && coords.longitude),
    moveToCenter,
  });

  // 현재 위치로 이동하는 함수
  const moveToCurrentPosition = useCallback(() => {
    console.log(coords.latitude, coords.longitude);
    if (coords.latitude && coords.longitude) {
      moveToCenter({ lat: coords.latitude, lng: coords.longitude });
    }
  }, [coords.latitude, coords.longitude, moveToCenter]);

  console.log(locationError);

  return (
    <PlayGroundMapDiv>
      <Map
        center={mapCenter}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={MAP_INITIAL_ZOOM_LEVEL}
        zoomable={true}
        draggable={true}
        ref={mapRef}
      >
        <MapMarker
          position={currentPosition}
          title="현재 위치"
          image={{
            src: playerMarkerUrl,
            size: {
              width: 80,
              height: 80,
            },
            options: {
              offset: {
                x: 45,
                y: 45,
              },
            },
          }}
        />
        {playgroundsData && (
          <MarkerClusterer averageCenter={true} minLevel={10}>
            {playgroundsData.map((playground) => (
              <MapMarker
                key={playground.id}
                position={{ lat: Number(playground.latitude), lng: Number(playground.longitude) }}
                title="놀이터 위치"
                image={{
                  src: playgroundMarkerUrl,
                  size: {
                    width: 60,
                    height: 60,
                  },
                }}
                onClick={() => selectPlayground(playground.name)}
              >
                {selectedPlaygroundName === playground.name && (
                  <div style={{ color: '#000' }}>{playground.name}</div>
                )}
              </MapMarker>
            ))}
          </MarkerClusterer>
        )}
        <CurrentPositionButton title="현재 위치로 이동" onClick={moveToCurrentPosition}>
          <CrossHair />
        </CurrentPositionButton>
      </Map>
    </PlayGroundMapDiv>
  );
};

export default PlayGroundMap;
