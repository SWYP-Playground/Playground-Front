export const convertPlaygroundName = (name: string) => {
  return name.split('+').join(' ');
};
