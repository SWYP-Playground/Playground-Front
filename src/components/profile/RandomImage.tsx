import profile1 from '@/assets/png/profile1.png';
import profile2 from '@/assets/png/profile2.png';
import profile3 from '@/assets/png/profile3.png';
import profile4 from '@/assets/png/profile4.png';
import profile5 from '@/assets/png/profile5.png';

const randomImages = [profile1, profile2, profile3, profile4, profile5];

export const getRandomImage = () => randomImages[Math.floor(Math.random() * randomImages.length)];
