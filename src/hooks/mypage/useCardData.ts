import { useState, useEffect } from 'react';

interface CardData {
  friendId: string;
  nickname: string;
  status: string;
  address: string;
  image: string;
  content: string;
}

export const useCardData = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          friendId: '22',
          nickname: '닉네임',
          status: '아빠',
          address: '서울시 노원구 중계동',
          image:
            'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
          content: '쪽지 내용입니다.',
        },
        {
          friendId: '22',
          nickname: '닉네임',
          status: '아빠',
          address: '서울시 노원구 중계동',
          image:
            'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
          content: '쪽지 내용입니다.',
        },
        {
          friendId: '22',
          nickname: '닉네임',
          status: '아빠',
          address: '서울시 노원구 중계동',
          image:
            'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
          content: '쪽지 내용입니다.',
        },
      ];
      setCardData(data);
    };
    fetchData();
  }, []);
  return cardData;
};
