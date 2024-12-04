import { useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import TemperatureModal from '@/components/temperature/TemperatureModal/TemperatureModal';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { FriendsPlayedFlex } from '@/pages/FriendsPlayedPage/FriendsPlayedPage style';
import TemperatureButton from '@/components/temperature/TemperatureButton/TemperatureButton';

const FriendsPlayedPage = () => {
  const navigate = useNavigate();

  const goBackToPage = () => {
    navigate(-1);
  };

  return (
    <FriendsPlayedFlex>
      <Header title="최근 논 친구" leftIcon={<LeftIcon />} onLeftClick={goBackToPage} />
      <TemperatureModal>
        <TemperatureButton />
      </TemperatureModal>
    </FriendsPlayedFlex>
  );
};

export default FriendsPlayedPage;
