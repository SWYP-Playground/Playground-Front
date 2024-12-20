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
import { DATE_COLUMNS, INITIAL_MEET_TIME } from '@/constants/playground';
import { Control, Controller } from 'react-hook-form';
import { FormValues } from '@/components/playGround/PlayGroundForm/PlayGroundForm';

interface ControlType {
  control: Control<FormValues, any>;
  startTime: string[];
}

const MeetTimePicker = ({ control, startTime }: ControlType) => {
  const [visible, setVisible] = useState(false);

  return (
    <PlayGroundFormElement>
      <PlayGroundFormLabel htmlFor="startTime">만나는 시간</PlayGroundFormLabel>
      <ConfigProvider locale={koKR}>
        <Controller
          name="startTime"
          control={control}
          defaultValue={startTime.length === 0 ? INITIAL_MEET_TIME : startTime}
          render={({ field: { value, onChange } }) => (
            <PlayGroundFormDropDown>
              {value.map((item) => (
                <DropdownButton
                  onClick={() => {
                    setVisible(true);
                  }}
                >
                  {item}
                  <ChevronDownIcon />
                </DropdownButton>
              ))}

              <Picker
                columns={DATE_COLUMNS}
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

export default MeetTimePicker;
