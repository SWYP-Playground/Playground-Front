export interface PlaygroundData {
  id: string;
  name: string;
  address?: string;
  latitude: string;
  longitude: string;
  distance: string;
}

export interface PlaygroundType {
  playgrounds: PlaygroundData[];
}

export interface PlaygroundRoom {
  title: string;
  description: string;
  startTime: string[];
  duration: string[];
  playgroundName: PlaygroundData;
}
