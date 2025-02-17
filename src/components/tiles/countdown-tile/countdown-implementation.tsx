"use client";

import { intervalToDuration } from "date-fns";
import { useEffect, useMemo, useState } from "react";

export default function CountdownTileImplementation() {
  const target = useMemo(() => new Date(2025, 3, 18, 12, 0), []); // 2025. 02. 05. 17:00 - start of registration
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
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-bold leading-tight inline">
          {duration.months ? (duration.days ?? 0) + 30 : duration.days}
          {" : "}
          {duration.hours ? String(duration.hours).padStart(2, "0") : "00"}
          {" : "}
          {duration.minutes ? String(duration.minutes).padStart(2, "0") : "00"}
          {" : "}
          {duration.seconds ? String(duration.seconds).padStart(2, "0") : "00"}
        </h1>
      </div>
    </>
  );
}
