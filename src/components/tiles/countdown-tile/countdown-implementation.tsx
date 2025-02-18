"use client";

import { intervalToDuration } from "date-fns";
import { useEffect, useMemo, useState } from "react";

export default function CountdownTileImplementation() {
  //const target = useMemo(() => new Date(2025, 2, 18, 12, 0), []); // 2025. 02. 05. 17:00 - start of registration
  const target = useMemo(() => new Date(2025, 2, 18, 18, 0), []);
  const [duration, setDuration] = useState(
    intervalToDuration({ start: new Date(), end: target })
  );

  useEffect(() => {
    const update = () => {
      if (target.getTime() > Date.now())
        setDuration(intervalToDuration({ start: new Date(), end: target }));
    };
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [target]);
  const hours = duration.hours ? duration.hours : 0;
  const hoursWithDays = hours + (duration.days || 0) * 24;
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <h1>
          {String(hoursWithDays).padStart(2, "0")}
          {" : "}
          {duration.minutes ? String(duration.minutes).padStart(2, "0") : "00"}
          {" : "}
          {duration.seconds ? String(duration.seconds).padStart(2, "0") : "00"}
        </h1>
      </div>
    </>
  );
}
