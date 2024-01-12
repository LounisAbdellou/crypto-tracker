export const getTimeDiff = (startTime: Date, endTime: Date) => {
  const difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
  const resultInMinutes = Math.round(difference / 60000);

  return resultInMinutes;
};
