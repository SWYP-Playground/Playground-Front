import { useState } from 'react';

export const usePlaygroundInfo = () => {
  const [selectedPlaygroundName, setSelectedPlaygroundName] = useState<string>('');

  const selectPlayground = (name: string) => {
    setSelectedPlaygroundName(name);
  };

  const clearSelection = () => {
    setSelectedPlaygroundName('');
  };

  return {
    selectedPlaygroundName,
    selectPlayground,
    clearSelection,
  };
};
