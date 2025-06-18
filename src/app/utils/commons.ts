export const cutStringToSpecificLength = (
  fullString: string,
  length: number
) => {
  if (!fullString || fullString.length < length) {
    return fullString;
  }
  return fullString.slice(0, length) + '...';
};
