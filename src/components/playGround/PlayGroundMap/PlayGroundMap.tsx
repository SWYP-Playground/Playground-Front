import { useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import useKakaoLoader from '@/hooks/common/useKakaoLoader';
import { MAP_INITIAL_ZOOM_LEVEL } from '@/constants/map';
import useLocation from '@/hooks/common/useLocation';

const PlayGroundMap = () => {
  useKakaoLoader();
  const mapRef = useRef<kakao.maps.Map>(null);
  const { coords, locatedAt, error } = useLocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  });

  console.log(coords, locatedAt, error);

  return (
    <Map // 지도를 표시할 Container
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100dvh',
      }}
      level={MAP_INITIAL_ZOOM_LEVEL} // 지도의 확대 레벨
      zoomable={true}
      draggable={true}
      ref={mapRef}
    />
  );
};

export default PlayGroundMap;
