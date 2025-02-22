"use client";

import { intervalToDuration } from "date-fns";
import { useEffect, useMemo, useState } from "react";

export default function CountdownTileImplementation() {
  const target = useMemo(() => new Date(2025, 2, 18, 10, 0), []);
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
      <div className="grid grid-cols-11 justify-center gap-0 font-cygrotesk text-3xl md:text-5xl place-items-center">
        <span className="col-span-2">
          {duration.days ? String(duration.days).padStart(2, "0") : "00"}
        </span>
        <span>{":"}</span>
        <span className="col-span-2">
          {duration.hours ? String(duration.hours).padStart(2, "0") : "00"}
        </span>
        <span>{":"}</span>
        <span className="col-span-2">
          {duration.minutes ? String(duration.minutes).padStart(2, "0") : "00"}
        </span>
        <span>{":"}</span>
        <span className="col-span-2">
          {duration.seconds ? String(duration.seconds).padStart(2, "0") : "00"}
        </span>
      </div>
    </>
  );
}
