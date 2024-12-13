import {
  TemperatureButtonStyling,
  TemperatureSpan,
} from '@/components/temperature/TemperatureButton/TemperatureButton.style';
import TemperatureIcon from '@/assets/svg/temperature.svg?react';
import { Dialog } from '@radix-ui/themes';

const TemperatureButton = () => {
  return (
    <Dialog.Trigger>
      <TemperatureButtonStyling>
        <TemperatureIcon />
        <TemperatureSpan>온도 남기기</TemperatureSpan>
      </TemperatureButtonStyling>
    </Dialog.Trigger>
  );
};

export default TemperatureButton;
