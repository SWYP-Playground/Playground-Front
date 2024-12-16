export const convertMeetTime = (time: string[]) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const ampm = time[0];
  let hour = parseInt(time[1].replace('시', ''), 10);
  const minute = time[2].replace('분', '');

  if (ampm === '오후' && hour !== 12) {
    hour += 12;
  }

  if (ampm === '오전' && hour === 12) {
    hour = 0;
  }

  const hourStr = String(hour).padStart(2, '0');
  const minuteStr = String(minute).padStart(2, '0');

  return `${year}-${month}-${day}T${hourStr}:${minuteStr}`;
};

export const convertFinishTime = (time: string[]) => {
  const duration = time[0];
  if (duration === '30분 후') return 30;
  if (duration === '1시간 후') return 60;
  if (duration === '1시간 30분 후') return 90;
  if (duration === '2시간 후') return 120;
  if (duration === '2시간 30분 후') return 150;
  if (duration === '3시간 후') return 180;
  return 60;
};
