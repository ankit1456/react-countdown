import { useCountdown } from "../hooks/useCountdown";
import TimeSegment from "./TimeSegment";

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <div className="flex items-center  lg:gap-5 gap-3">
      <TimeSegment segmentName="Days" value={days} />
      <span className="time-divider">:</span>
      <TimeSegment segmentName="Hours" value={hours} />
      <span className="time-divider">:</span>
      <TimeSegment segmentName="Minutes" value={minutes} />
      <span className="time-divider">:</span>
      <TimeSegment segmentName="Seconds" value={seconds} />
    </div>
  );
};

export default Countdown;
