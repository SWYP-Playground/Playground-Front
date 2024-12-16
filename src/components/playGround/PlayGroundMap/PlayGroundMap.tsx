import { useCallback, useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

import useKakaoLoader from '@/hooks/common/useKakaoLoader';
import { MAP_DEFAULT_CENTER, MAP_INITIAL_ZOOM_LEVEL } from '@/constants/map';
import useLocation from '@/hooks/common/useLocation';
import {
  CurrentPositionButton,
  PlayGroundMapDiv,
} from '@/components/playGround/PlayGroundMap/PlayGroundMap.style';
import { PlaygroundData } from '@/types/playground';
import playerMarkerUrl from '@/assets/svg/player-marker.svg';
import CrossHair from '@/assets/svg/crosshair.svg?react';
import playgroundMarkerUrl from '@/assets/svg/playground-marker.svg';
export interface CenterType {
  lat: number;
  lng: number;
}

interface PlayGroundMapProps {
  playgroundsData?: PlaygroundData[];
}

const PlayGroundMap = ({ playgroundsData }: PlayGroundMapProps) => {
  useKakaoLoader();
  const [centerUpdateAllowed, setCenterUpdateAllowed] = useState(true);
  const [center, setCenter] = useState<CenterType>(MAP_DEFAULT_CENTER);
  const mapRef = useRef<kakao.maps.Map>(null);

  const { coords, error: locationError } = useLocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  });

  const moveCenter = useCallback(() => {
    console.log(coords.latitude, coords.longitude);
    if (!mapRef.current || !coords.latitude || !coords.longitude) return;

    const newCenter = new kakao.maps.LatLng(coords.latitude, coords.longitude);
    mapRef.current.setCenter(newCenter);
    setCenter({ lat: coords.latitude, lng: coords.longitude });
    setCenterUpdateAllowed(true);
  }, [coords.latitude, coords.longitude]);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      const stopCenterUpdate = () => {
        console.log('사용자가 지도를 이동했습니다.');
        setCenterUpdateAllowed(false);
      };

      kakao.maps.event.addListener(map, 'dragend', stopCenterUpdate);

      return () => {
        kakao.maps.event.removeListener(map, 'dragend', stopCenterUpdate);
      };
    }
  }, []);

  useEffect(() => {
    if (coords.latitude && coords.longitude) {
      const distance = Math.sqrt(
        Math.pow(coords.latitude - center.lat, 2) + Math.pow(coords.longitude - center.lng, 2),
      );

      if (distance > 0.001 && centerUpdateAllowed) {
        // 0.001 정도는 미세한 이동으로 간주
        setCenter({ lat: coords.latitude, lng: coords.longitude });
      }
    }
  }, [coords.latitude, coords.longitude, center, centerUpdateAllowed]);

  console.log(locationError);

  return (
    <PlayGroundMapDiv>
      <Map
        center={center}
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
          position={center}
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
                position={{ lat: Number(playground.latitude), lng: Number(playground.longitude) }}
                title="놀이터 위치"
                image={{
                  src: playgroundMarkerUrl,
                  size: {
                    width: 60,
                    height: 60,
                  },
                }}
              />
            ))}
          </MarkerClusterer>
        )}
        <CurrentPositionButton title="현재 위치로 이동" onClick={moveCenter}>
          <CrossHair />
        </CurrentPositionButton>
      </Map>
    </PlayGroundMapDiv>
  );
};

export default PlayGroundMap;
