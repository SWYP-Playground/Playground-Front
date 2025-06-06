import { useCallback, useState, useEffect } from 'react';
import useLocation from '@/hooks/common/useLocation';
import { MAP_DEFAULT_CENTER } from '@/constants/map';

export interface CenterType {
  lat: number;
  lng: number;
}

export const useLocationTracking = () => {
  const [currentPosition, setCurrentPosition] = useState<CenterType>(MAP_DEFAULT_CENTER);

  const { coords, error: locationError } = useLocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  });

  const updateCurrentPosition = useCallback(() => {
    if (coords.latitude && coords.longitude) {
      setCurrentPosition({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    }
  }, [coords.latitude, coords.longitude]);

  useEffect(() => {
    updateCurrentPosition();
  }, [updateCurrentPosition]);

  return {
    currentPosition,
    coords,
    locationError,
    updateCurrentPosition,
  };
};
