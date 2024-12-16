import { useForm, useWatch } from 'react-hook-form';

import {
  PlayGroundFormFlex,
  PlayGroundFormLabel,
  PlayGroundFormTitleInput,
  PlayGroundFormContentFlex,
  PlayGroundFormContentTextArea,
  PlayGroundFormContentLength,
  PlayGroundFormSubmitButton,
  PlayGroundFormElement,
} from '@/components/playGround/PlayGroundForm/PlayGroundForm.style';
import MeetTimePicker from '@/components/playGround/MeetTimePicker/MeetTimePicker';
import FinishTimePicker from '@/components/playGround/FinishTimePicker/FinishTimePicker';
import PlayGroundFormSearchBar from '@/components/playGround/PlayGroundFormSearchBar/PlayGroundFormSearchBar';
import { DESCRIPTION_MAX_LENGTH } from '@/constants/playground';
import { PlaygroundData, PlaygroundRoom } from '@/types/playground';
import { convertFinishTime, convertMeetTime } from '@/utils/convertTime';
import { useRegisterFindFriendMutation } from '@/hooks/api/useRegisterFindFriendMutation';

export interface FormValues {
  title: string;
  playgroundName: PlaygroundData;
  description: string;
  startTime: string[];
  duration: string[];
}

const PlayGroundForm = () => {
  const registerMutation = useRegisterFindFriendMutation();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });
  const description = useWatch({ control, name: 'description', defaultValue: '' });
  const watchAllFields = watch();
  const isValid =
    Object.keys(errors).length === 0 && watchAllFields.title && watchAllFields.description;

  const onSubmit = (data: PlaygroundRoom) => {
    const playgroundName = data.playgroundName.name;
    const startTime = convertMeetTime(data.startTime);
    const duration = convertFinishTime(data.duration);
    const playgroundRoom = {
      title: data.title,
      playgroundName: playgroundName,
      startTime: startTime,
      duration: duration,
      description: data.description,
    };
    console.log(JSON.stringify(playgroundRoom));
    registerMutation.mutate({
      playgroundId: data.playgroundName.id,
      findFriendData: playgroundRoom,
    });
  };

  return (
    <PlayGroundFormFlex onSubmit={handleSubmit(onSubmit)}>
      <PlayGroundFormElement>
        <PlayGroundFormLabel htmlFor="title">모집글 제목</PlayGroundFormLabel>
        <PlayGroundFormTitleInput
          id="title"
          placeholder="제목을 입력해 주세요"
          {...register('title')}
        />
      </PlayGroundFormElement>
      <PlayGroundFormElement>
        <PlayGroundFormLabel htmlFor="playgroundName">놀이터</PlayGroundFormLabel>
        <PlayGroundFormSearchBar setValue={setValue} />
      </PlayGroundFormElement>
      <MeetTimePicker control={control} />
      <FinishTimePicker control={control} />
      <PlayGroundFormElement>
        <PlayGroundFormLabel htmlFor="description">모집 내용</PlayGroundFormLabel>
        <PlayGroundFormContentFlex>
          <PlayGroundFormContentTextArea
            id="description"
            placeholder="간단한 소개글과 모집 내용을 적어주세요."
            maxLength={100}
            {...register('description')}
          />
          <PlayGroundFormContentLength>
            {description.length}/{DESCRIPTION_MAX_LENGTH}자
          </PlayGroundFormContentLength>
        </PlayGroundFormContentFlex>
      </PlayGroundFormElement>
      <PlayGroundFormSubmitButton type="submit" disabled={!isValid}>
        등록하기
      </PlayGroundFormSubmitButton>
    </PlayGroundFormFlex>
  );
};

export default PlayGroundForm;
