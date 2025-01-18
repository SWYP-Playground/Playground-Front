import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Picker, ConfigProvider } from 'antd-mobile';
import koKR from 'antd-mobile/es/locales/ko-KR';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import {
  PlayGroundFormElement,
  PlayGroundFormDropDown,
  DropdownButton,
  PlayGroundFormLabel,
} from '@/components/playGround/PlayGroundForm/PlayGroundForm.style';
import { FormValues } from '@/components/playGround/PlayGroundForm/PlayGroundForm';

interface ControlType {
  control: Control<FormValues, any>;
  name: 'duration' | 'startTime';
  label: string;
  defaultValue: string[];
  initialValue: string[];
  columns: {
    label: string;
    value: string;
  }[][];
}

const TimePicker = ({ control, name, label, defaultValue, initialValue, columns }: ControlType) => {
  const [visible, setVisible] = useState(false);

  return (
    <PlayGroundFormElement>
      <PlayGroundFormLabel htmlFor={name}>{label}</PlayGroundFormLabel>
      <ConfigProvider locale={koKR}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue.length === 0 ? initialValue : defaultValue}
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
                columns={columns}
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

export default TimePicker;
