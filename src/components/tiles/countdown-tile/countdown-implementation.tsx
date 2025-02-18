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
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <h1>
          {duration.days ? String(duration.days).padStart(2, "0") : "00"}
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
