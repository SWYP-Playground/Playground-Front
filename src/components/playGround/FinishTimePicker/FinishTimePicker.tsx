import { Picker, ConfigProvider } from 'antd-mobile';
import koKR from 'antd-mobile/es/locales/ko-KR';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import {
  PlayGroundFormElement,
  PlayGroundFormDropDown,
  DropdownButton,
  PlayGroundFormLabel,
} from '@/components/playGround/PlayGroundForm/PlayGroundForm.style';
import { FINISH_TIME_COLUMNS, INITIAL_FINISH_TIME } from '@/constants/playground';
import { Control, Controller } from 'react-hook-form';
import { FormValues } from '@/components/playGround/PlayGroundForm/PlayGroundForm';

interface ControlType {
  control: Control<FormValues, any>;
  duration: string[];
}

const FinishTimePicker = ({ control, duration }: ControlType) => {
  const [visible, setVisible] = useState(false);

  return (
    <PlayGroundFormElement>
      <PlayGroundFormLabel htmlFor="duration">종료 시간</PlayGroundFormLabel>
      <ConfigProvider locale={koKR}>
        <Controller
          name="duration"
          control={control}
          defaultValue={duration.length === 0 ? INITIAL_FINISH_TIME : duration}
          render={({ field: { value, onChange } }) => (
            <PlayGroundFormDropDown>
              <DropdownButton
                onClick={() => {
                  setVisible(true);
                }}
              >
                <span>{value}</span>
                <ChevronDownIcon />
              </DropdownButton>

              <Picker
                columns={FINISH_TIME_COLUMNS}
                visible={visible}
                onClose={() => setVisible(false)}
                value={value}
                onConfirm={(v: any) => {
                  onChange(v);
                }}
              />
            </PlayGroundFormDropDown>
          )}
        />
      </ConfigProvider>
    </PlayGroundFormElement>
  );
};

export default FinishTimePicker;
