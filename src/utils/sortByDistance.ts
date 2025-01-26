import { PlaygroundData } from '@/types/playground';

export const sortByDistance = (data: PlaygroundData[]) => {
  return data.sort((a, b) => {
    const distanceA = parseFloat(a.distance.replace(' km', ''));
    const distanceB = parseFloat(b.distance.replace(' km', ''));
    return distanceA - distanceB; // 가까운 순으로 정렬
  });
};
