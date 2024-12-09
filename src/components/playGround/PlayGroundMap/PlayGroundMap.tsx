import { useCallback, useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import useKakaoLoader from '@/hooks/common/useKakaoLoader';
import { MAP_DEFAULT_CENTER, MAP_INITIAL_ZOOM_LEVEL } from '@/constants/map';
import useLocation from '@/hooks/common/useLocation';
import CrossHair from '@/assets/svg/crosshair.svg?react';
import {
  CurrentPositionButton,
  PlayGroundMapDiv,
} from '@/components/playGround/PlayGroundMap/PlayGroundMap.style';
import playerMarkerUrl from '@/assets/svg/player-marker.svg';

export interface CenterType {
  lat: number;
  lng: number;
}

const PlayGroundMap = () => {
  useKakaoLoader();
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
  }, [coords.latitude, coords.longitude]);

  useEffect(() => {
    if (coords.latitude && coords.longitude) {
      setCenter({ lat: coords.latitude, lng: coords.longitude });
    }
  }, [coords.latitude, coords.longitude]);

  console.log(center, coords);

  console.log(coords, locationError);

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
              width: 100,
              height: 100,
            },
            options: {
              offset: {
                x: 45,
                y: 45,
              },
            },
          }}
        />
        <CurrentPositionButton title="현재 위치로 이동" onClick={moveCenter}>
          <CrossHair />
        </CurrentPositionButton>
      </Map>
    </PlayGroundMapDiv>
  );
};

export default PlayGroundMap;
