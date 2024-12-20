const parseTime = (time: string) => {
  const [amPm, hourMinute] = time.split(' ');
  const [hour, minute] = hourMinute.split(':');

  return { amPm, hour, minute };
};

const formattedTime = (amPm: string, hour: string, minute: string) => {
  return [`${amPm}`, `${parseInt(hour, 10)}시`, `${minute}분`];
};

const totalMinutes = (hour: number, minute: string) => {
  return hour * 60 + parseInt(minute, 10);
};

const convertTo24Hour = (amPm: string, hour: number) => {
  if (amPm === '오후' && hour !== 12) return hour + 12;
  if (amPm === '오전' && hour === 12) return 0;
  return hour;
};

const durationMinutes = (startMinutes: number, finishMinutes: number) => {
  const duration =
    finishMinutes >= startMinutes
      ? finishMinutes - startMinutes
      : 24 * 60 - startMinutes + finishMinutes;

  return duration;
};

const formattedDuration = (duration: number) => {
  const hour = Math.floor(duration / 60);
  const minute = duration % 60;

  if (hour >= 1) {
    if (minute === 30) {
      return [`${hour}시간 ${minute}분 후`];
    }

    return [`${hour}시간 후`];
  }

  return [`${minute}분 후`];
};

export const parseScheduleTime = (scheduleTime?: string) => {
  if (!scheduleTime) {
    return { formattedStartTime: [], durationMinute: [] };
  }

  const [startTime, finishTime] = scheduleTime.split('~').map((time) => time.trim());
  const parsedStartTime = startTime.split(' ').slice(-2).join(' ');

  const { amPm: startAmPm, hour: startHour, minute: startMinute } = parseTime(parsedStartTime);
  const { amPm: finishAmPm, hour: finishHour, minute: finishMinute } = parseTime(finishTime);

  const startHour24 = convertTo24Hour(startAmPm, parseInt(startHour, 10));
  const finishHour24 = convertTo24Hour(finishAmPm, parseInt(finishHour, 10));

  const startTotalMinutes = totalMinutes(startHour24, startMinute);
  const finishTotalMinutes = totalMinutes(finishHour24, finishMinute);

  const duration = durationMinutes(startTotalMinutes, finishTotalMinutes);

  const durationMinute = formattedDuration(duration);
  const formattedStartTime = formattedTime(startAmPm, startHour, startMinute);

  return { formattedStartTime, durationMinute };
};
