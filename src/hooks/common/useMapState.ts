import { useCallback, useEffect, useRef, useState } from 'react';
import { MAP_DEFAULT_CENTER } from '@/constants/map';
import { CenterType } from './useLocationTracking';

export const useMapState = () => {
  const [mapCenter, setMapCenter] = useState<CenterType>(MAP_DEFAULT_CENTER);
  const [centerUpdateAllowed, setCenterUpdateAllowed] = useState(true);
  const mapRef = useRef<kakao.maps.Map>(null);

  const moveToCenter = useCallback((center: CenterType) => {
    if (!mapRef.current) return;

    const newCenter = new kakao.maps.LatLng(center.lat, center.lng);
    mapRef.current.setCenter(newCenter);
    setMapCenter(center);
    setCenterUpdateAllowed(true);
  }, []);

  const setupMapEventListeners = useCallback(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    const stopCenterUpdate = () => {
      setCenterUpdateAllowed(false);
    };

    kakao.maps.event.addListener(map, 'dragend', stopCenterUpdate);

    return () => {
      kakao.maps.event.removeListener(map, 'dragend', stopCenterUpdate);
    };
  }, []);

  useEffect(() => {
    const cleanup = setupMapEventListeners();
    return cleanup;
  }, [setupMapEventListeners]);

  return {
    mapCenter,
    setMapCenter,
    centerUpdateAllowed,
    mapRef,
    moveToCenter,
  };
};
