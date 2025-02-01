"use client";

import { intervalToDuration } from "date-fns";
import { useEffect, useMemo, useState } from "react";

import { CountDownElement } from "@/components/tiles/countdown-tile/countdown-element";

export default function CountdownTileImplementation() {
  const target = useMemo(() => new Date(1738598400), []); // 2025. 02. 05. 17:00 - start of registration
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
      <p className="text-4xl font-bold">
        még{" "}
        <span className="text-7xl xxs:text-8xl sm:text-9xl md:text-8xl lg:text-9xl">
          {duration.months ? (duration.days ?? 0) + 30 : duration.days}
        </span>{" "}
        nap
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <CountDownElement
          value={
            duration.hours ? String(duration.hours).padStart(2, "0") : "00"
          }
          label="óra"
        />
        <CountDownElement
          value={
            duration.minutes ? String(duration.minutes).padStart(2, "0") : "00"
          }
          label="perc"
        />
        <CountDownElement
          value={
            duration.seconds ? String(duration.seconds).padStart(2, "0") : "00"
          }
          label="mp"
        />
      </div>
    </>
  );
}
