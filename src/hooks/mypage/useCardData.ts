import { useState, useEffect } from 'react';

import { ParentRoleType } from '@/types/parent';

interface CardData {
  friendId: string;
  nickname: string;
  roleType: ParentRoleType;
  address: string;
  image: string;
  introduce: string;
}

export const useCardData = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: CardData[] = [
        {
          friendId: '1',
          nickname: '길동1',
          roleType: 'MOTHER',
          address: '구미시 산호대로 25길 25-3',
          image:
            'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
          introduce: '자기소개입니다.',
        },
        {
          friendId: '2',
          nickname: '닉네임',
          roleType: 'FATHER',
          address: '서울시 노원구 중계동',
          image:
            'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
          introduce: '자기소개입니다.',
        },
        {
          friendId: '3',
          nickname: '닉네임',
          roleType: 'MOTHER',
          address: '서울시 노원구 중계동',
          image:
            'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
          introduce: '자기소개입니다.',
        },
      ];
      setCardData(data);
    };
    fetchData();
  }, []);
  return cardData;
};
