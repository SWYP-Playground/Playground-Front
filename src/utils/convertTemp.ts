import { TEMPERATURE_VALUE } from '@/constants/temperature';
import { TemperatureType } from '@/types/temperature';

export const convertTemp = (temp: TemperatureType) => {
  if (temp === 'sad') return TEMPERATURE_VALUE.sad;
  if (temp === 'good') return TEMPERATURE_VALUE.good;
  if (temp === 'again') return TEMPERATURE_VALUE.again;
  return TEMPERATURE_VALUE.good;
};
