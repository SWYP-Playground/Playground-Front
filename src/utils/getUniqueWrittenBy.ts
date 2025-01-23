import { NoteData } from '@/types/note';

interface getUniqueWrittenByType {
  data: NoteData[];
  nickname: string;
}

export const getUniqueDataByTargetNickname = ({ data, nickname }: getUniqueWrittenByType) => {
  const seen = new Set(); // 이미 처리한 writtenBy를 추적
  return data.filter((item) => {
    if (item.targetNickname === nickname && !seen.has(item.writtenBy)) {
      seen.add(item.writtenBy); // 새로운 writtenBy 발견 시 추가
      return true; // 해당 항목 유지
    }
    return false; // 중복된 writtenBy는 제외
  });
};
