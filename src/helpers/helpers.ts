export const pad = (minutes: number): string | number => {
  return minutes < 10 ? "0" + minutes : minutes;
};

export const secondsToReadableTime = (seconds: number): string => {
  return `${pad(Math.floor(seconds / 60))} : ${pad(Math.floor(seconds % 60))}`;
};

export const saveNumberOfSuccessfulTimers = (): void => {
  const key: string = "numberOfTimers";
  let successfulTimers: string | null = localStorage.getItem(key);
  if (successfulTimers) {
    successfulTimers = (parseInt(successfulTimers, 10) + 1).toString();
    localStorage.setItem(key, successfulTimers);
  }
};

export const getNumberOfSuccessfulTimers = (): number => {
  const key: string = "numberOfTimers";
  const numberOfTimers = localStorage.getItem(key);
  return numberOfTimers ? parseInt(numberOfTimers, 10) : 0;
};
