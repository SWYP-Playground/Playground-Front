import { Button, Dialog, Flex, Skeleton } from '@radix-ui/themes';
import { ReactNode, useState } from 'react';

import {
  CompleteButton,
  RadioGroupItem,
  RadioGroupRoot,
  TemperatureModalContent,
  TemperatureModalTitle,
} from '@/components/temperature/TemperatureModal/TemperatureModal.style';
import CancelIcon from '@/assets/svg/cancel.svg?react';
import ReportIcon from '@/assets/svg/report.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

interface TemperatureModalProps {
  children: ReactNode;
}

const TemperatureModal = ({ children }: TemperatureModalProps) => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  const reportFriend = () => {
    navigate(PATH.REPORT_FRIEND('22'));
  };

  return (
    <Dialog.Root>
      {children}

      <TemperatureModalContent maxWidth="450px">
        <Flex justify="end">
          <Dialog.Close>
            <CancelIcon />
          </Dialog.Close>
        </Flex>
        <TemperatureModalTitle mb="1" align="center">
          친구 온도 남기기
        </TemperatureModalTitle>

        <Flex direction="column" gap="3" align="center">
          <RadioGroupRoot color="gray" highContrast onValueChange={handleValueChange}>
            <RadioGroupItem value="sad" id="sad">
              <Flex direction="column" align="center" gap="2">
                <Skeleton width="48px" height="48px" />
                <span>아쉬워요</span>
              </Flex>
            </RadioGroupItem>
            <RadioGroupItem value="good" id="good">
              <Flex direction="column" align="center" gap="2">
                <Skeleton width="48px" height="48px" />
                <span>좋아요</span>
              </Flex>
            </RadioGroupItem>
            <RadioGroupItem value="again" id="again">
              <Flex direction="column" align="center" gap="2">
                <Skeleton width="48px" height="48px" />
                <span>또 만나요</span>
              </Flex>
            </RadioGroupItem>
          </RadioGroupRoot>
        </Flex>

        <Flex gap="3" mt="4" direction="column" align="start">
          <Dialog.Close>
            <CompleteButton disabled={!selectedValue}>완료</CompleteButton>
          </Dialog.Close>
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={reportFriend}>
              <ReportIcon /> 신고하기
            </Button>
          </Dialog.Close>
        </Flex>
      </TemperatureModalContent>
    </Dialog.Root>
  );
};

export default TemperatureModal;
