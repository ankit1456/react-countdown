import { useEffect, useState } from "react";

export const useCountdown = (targetDate: Date) => {
  const [countdown, setCountdown] = useState(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetDateInMS = targetDate.getTime();
      const currentTime = new Date().getTime();

      const remainingTime = targetDateInMS - currentTime;

      if (remainingTime <= 0) return clearInterval(intervalId);

      setCountdown(remainingTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return formatValues(countdown);
};

const formatValues = (countdown: number) => {
  const days = Math.floor(countdown / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (countdown % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (60 * 60 * 1000)) / (1000 * 60));
  const seconds = Math.floor((countdown % (60 * 1000)) / 1000);

  return [days, hours, minutes, seconds];
};
