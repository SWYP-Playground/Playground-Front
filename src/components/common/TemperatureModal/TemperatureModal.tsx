import { Button, Dialog, Flex, TextField } from '@radix-ui/themes';
import { ReactNode } from 'react';

import {
  CompleteButton,
  TemperatureModalContent,
  TemperatureModalTitle,
} from '@/components/common/TemperatureModal/TemperatureModal.style';
import CancelIcon from '@/assets/svg/cancel.svg?react';
import ReportIcon from '@/assets/svg/report.svg?react';

interface TemperatureModalProps {
  children: ReactNode;
}

const TemperatureModal = ({ children }: TemperatureModalProps) => {
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

        <Flex direction="column" gap="3">
          <label>
            Name
            <TextField.Root defaultValue="Freja Johnsen" placeholder="Enter your full name" />
          </label>
          <label>
            Email
            <TextField.Root defaultValue="freja@example.com" placeholder="Enter your email" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" direction="column" align="start">
          <Dialog.Close>
            <CompleteButton>완료</CompleteButton>
          </Dialog.Close>
          <Dialog.Close>
            <Button variant="soft" color="gray">
              <ReportIcon /> 신고하기
            </Button>
          </Dialog.Close>
        </Flex>
      </TemperatureModalContent>
    </Dialog.Root>
  );
};

export default TemperatureModal;
