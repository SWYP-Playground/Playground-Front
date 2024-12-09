export const DESCRIPTION_MAX_LENGTH = 100;

export const INITIAL_MEET_TIME = ['오후', '5시', '00분'];

export const INITIAL_FINISH_TIME = ['1시간 후'];

export const AM_PM_OPTIONS = [
  { label: '오전', value: '오전' },
  { label: '오후', value: '오후' },
];

export const HOUR_OPTIONS = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}시`,
  value: `${i + 1}시`,
}));

export const MINUTE_OPTIONS = Array.from({ length: 60 }, (_, i) => ({
  label: `${i.toString().padStart(2, '0')}분`,
  value: `${i.toString().padStart(2, '0')}분`,
}));

export const DATE_COLUMNS = [AM_PM_OPTIONS, HOUR_OPTIONS, MINUTE_OPTIONS];

export const FINISH_TIME_COLUMNS = [
  [
    { label: '30분 후', value: '30분 후' },
    { label: '1시간 후', value: '1시간 후' },
    { label: '1시간 30분 후', value: '1시간 30분 후' },
    { label: '2시간 후', value: '2시간 후' },
    { label: '2시간 30분 후', value: '2시간 30분 후' },
    { label: '3시간 후', value: '3시간 후' },
  ],
];
