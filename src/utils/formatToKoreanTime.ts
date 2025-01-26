const formatToKoreanTime = (time: string) => {
  const date = new Date(time);

  const year = String(date.getFullYear()).slice(2);
  const month = date.getMonth() + 1; // 월 (0부터 시작하므로 1 더함)
  const day = date.getDate(); // 일

  let hours = date.getHours(); // 24시간 형식의 시간
  const minutes = date.getMinutes(); // 분

  // 오전/오후 결정
  const period = hours >= 12 ? '오후' : '오전';

  // 12시간 형식으로 변환
  hours = hours % 12 || 12;

  // 분이 한 자리일 경우 0 추가
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // 최종 문자열 반환
  return `${year}년 ${month}월 ${day}일 ${period} ${hours}:${formattedMinutes}`;
};

export default formatToKoreanTime;
