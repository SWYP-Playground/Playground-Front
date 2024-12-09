import { useState } from 'react';

export const useExtraImage = (initialImages: string[] = []) => {
  const [images, setImages] = useState<string[]>(initialImages);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageUrl]);
    }
  };

  const handleDelete = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    images,
    handleUpload,
    handleDelete,
  };
};
