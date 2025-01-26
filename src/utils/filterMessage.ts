import { NoteData } from '@/types/note';

interface FilterMessageType {
  data: NoteData[];
  nickname: string;
  writer: string;
}

const FilterMessage = ({ data, nickname, writer }: FilterMessageType) => {
  const Message = data.filter(
    (item) =>
      (item.targetNickname === nickname || item.targetNickname === writer) &&
      (item.writtenBy === nickname || item.writtenBy === writer),
  );

  return Message;
};

export default FilterMessage;
