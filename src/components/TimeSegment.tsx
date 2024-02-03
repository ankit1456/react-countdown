const TimeSegment = ({
  segmentName,
  value,
}: {
  segmentName: string;
  value: number;
}) => {
  return (
    <div className="time-segment">
      <span className="time-component">{segmentName}</span>
      <span className="time-value">{String(value).padStart(2, "0")}</span>
    </div>
  );
};

export default TimeSegment;
