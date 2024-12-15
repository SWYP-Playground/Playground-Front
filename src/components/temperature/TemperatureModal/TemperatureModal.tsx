import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Flex, Skeleton } from '@radix-ui/themes';

import {
  CompleteButton,
  RadioGroupItem,
  RadioGroupRoot,
  ReportButton,
  ReportSpan,
  TemperatureModalContent,
  TemperatureModalTitle,
} from '@/components/temperature/TemperatureModal/TemperatureModal.style';
import CancelIcon from '@/assets/svg/cancel.svg?react';
import { PATH } from '@/constants/path';
import { convertTemp } from '@/utils/convertTemp';
import { TemperatureType } from '@/types/temperature';
import { postLeaveMannerTemp } from '@/api/findFriend/postLeaveMannerTemp';

interface TemperatureModalProps {
  friendId: string;
  nickname: string;
  children: ReactNode;
}

const TemperatureModal = ({ friendId, nickname, children }: TemperatureModalProps) => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState<TemperatureType>('good');

  const onSubmitTemperature = async () => {
    const mannerTemp = convertTemp(selectedValue);
    const TempData = {
      TemperatureData: {
        nickname,
        mannerTemp,
      },
    };
    await postLeaveMannerTemp(TempData);
  };

  const handleValueChange = (value: TemperatureType) => {
    setSelectedValue(value);
  };

  const reportFriend = () => {
    navigate(PATH.REPORT_FRIEND(friendId));
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
          <RadioGroupRoot
            color="gray"
            highContrast
            onValueChange={handleValueChange}
            defaultValue="good"
          >
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

        <Flex gap="3" mt="4" direction="column" align="center">
          <Dialog.Close>
            <CompleteButton disabled={!selectedValue} onClick={onSubmitTemperature}>
              완료
            </CompleteButton>
          </Dialog.Close>
          <Flex align="center" gap="4">
            <ReportSpan>친구와 다툼이 있었나요?</ReportSpan>
            <Dialog.Close>
              <ReportButton onClick={reportFriend}>신고하기</ReportButton>
            </Dialog.Close>
          </Flex>
        </Flex>
      </TemperatureModalContent>
    </Dialog.Root>
  );
};

export default TemperatureModal;
