"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { CSSProperties, useRef } from "react";
import { Tile } from "@/components/tiles/tile";
import {
  BreakWithDates,
  PresentationWithDates,
  SponsorCategory,
} from "@/models/models";
import { dateToHourAndMinuteString } from "@/utils/dateHelper";
import slugify from "@/utils/slugify";

const TimespanUnit = 15 * 60 * 1000; // fifteen minutes
const TimespanUnitHeight = "minmax(5rem, auto)";

export function PresentationGrid({
  presentations,
  startDate,
  endDate,
}: {
  presentations: (PresentationWithDates | BreakWithDates)[];
  startDate: number;
  endDate: number;
}) {
  const fullTimespan = Math.abs(endDate - startDate);
  const allGridRows = Math.ceil(fullTimespan / TimespanUnit);

  const gridRef = useRef<HTMLUListElement | null>(null);
  return (
    <>
      <div className="flex sticky left-0 top-28 z-10 md:ml-24 flex-row justify-around rounded-b-md mb-8">
        <div className="rounded-md backdrop-blur-md bg-white bg-opacity-[0.15] py-4 px-6 font-bold text-lg">
          IB028
        </div>
        <div className="rounded-md backdrop-blur-md bg-white bg-opacity-[0.15] py-4 px-6 font-bold text-lg">
          IB025
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar flex">
        <ul
          ref={gridRef}
          className="presentation-grid snap-x snap-proximity"
          style={{
            gridTemplateRows: `repeat(${allGridRows}, ${TimespanUnitHeight})`,
          }}
        >
          {presentations.map((presentation) => (
            <li
              key={presentation.slug}
              className={clsx(
                "w-full px-1 pb-4",
                presentation.room == "IB028" && "pr-4"
              )}
              style={getPresentationCellStyles(startDate, presentation)}
            >
              {presentation.placeholder ? (
                <PresentationTile presentation={presentation} />
              ) : (
                <Link href={`/presentations/${slugify(presentation.title)}`}>
                  <PresentationTile presentation={presentation} />
                </Link>
              )}
            </li>
          ))}
          {[...timeMarkerGenerator(presentations)].map((markerDate) => (
            <TimeMarker
              key={markerDate.toString()}
              markerDate={markerDate}
              startDate={startDate}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export function PresentationTile({
  presentation,
  preview = false,
}: {
  presentation: PresentationWithDates | BreakWithDates;
  preview?: boolean;
}) {
  const presenter = presentation.placeholder
    ? null
    : (presentation as PresentationWithDates).presenter;
  const description = presentation.placeholder
    ? null
    : (presentation as PresentationWithDates).description;
  return (
    <>
      <Tile
        clickable={!presentation.placeholder && !preview}
        className="w-full h-full rounded-md"
        disableMinHeight={true}
      >
        <Tile.Body
          lessPadding="5"
          className="flex flex-col text-[--background]"
        >
          <span className="pb-2 text-xs">
            {presentation.room !== "BOTH" &&
              !preview &&
              `${presentation.room}  | `}
            {dateToHourAndMinuteString(presentation.startDate)} -{" "}
            {dateToHourAndMinuteString(presentation.endDate)}
          </span>
          <div className="flex flex-col justify-center flex-1">
            <div
              className={clsx(
                "flex",
                presentation.placeholder && "justify-around"
              )}
            >
              <h2
                className={clsx(
                  "text-lg lg:text-xl font-medium",
                  !presenter ? "text-center pb-4" : "pb-4 lg:pb-6"
                )}
              >
                {presentation.title}
              </h2>
              {presentation.room === "BOTH" && presentation.placeholder && (
                <h2
                  aria-hidden={true}
                  className={clsx(
                    "text-lg lg:text-xl pb-4 lg:pb-6 font-medium",
                    !presenter && "text-center"
                  )}
                >
                  {presentation.title}
                </h2>
              )}
            </div>
            {!!presenter && (
              <div className="flex gap-4">
                <img
                  src={presenter.pictureUrl}
                  className="object-cover rounded-3xl w-16 h-16"
                  alt="Presentation Image"
                />
                <div>
                  <h3 className="text-lg lg:text-2xl font-bold">
                    {presenter.name}
                  </h3>
                  <div className="text-xs lg:text-sm">{presenter.rank}</div>
                  <div className="hidden lg:block text-xs pt-0.5">
                    {presenter.company?.name}
                  </div>
                </div>
              </div>
            )}
            {presenter?.company?.category === SponsorCategory.MAIN_SPONSOR &&
              !preview && (
                <p className="mt-2 text-base whitespace-pre-line">
                  {description?.split("\n")[0]}
                </p>
              )}
          </div>
        </Tile.Body>
      </Tile>
    </>
  );
}

const TimeMarkerStepSize = 20 * 60 * 1000; // half an hour

function TimeMarker({
  markerDate,
  startDate,
}: {
  markerDate: Date;
  startDate: number;
}) {
  const rowStart =
    getTimeRowPositionInGrid(markerDate.getTime(), startDate) + 1;
  const rowEnd = rowStart + Math.floor(TimeMarkerStepSize / TimespanUnit) - 1;
  return (
    <li
      aria-hidden={true}
      className={clsx("snap-start hidden pr-4 md:block")}
      style={{ gridRowStart: rowStart, gridRowEnd: rowEnd }}
    >
      <div className="rounded-md backdrop-blur-md bg-white bg-opacity-[0.15] py-4 px-6 font-bold text-lg">
        {dateToHourAndMinuteString(markerDate)}
      </div>
    </li>
  );
}
function getUniqueDates(datesArray: Date[]): Date[] {
  const uniqueDates = new Set();

  return datesArray.filter((date) => {
    const dateString = date.toISOString(); // Convert date to string
    if (!uniqueDates.has(dateString)) {
      uniqueDates.add(dateString);
      return true;
    }
    return false;
  });
}

function timeMarkerGenerator(
  presentations: (PresentationWithDates | BreakWithDates)[]
): Date[] {
  const times = presentations.map((presentation) => presentation.startDate);
  return getUniqueDates(times);
}

function getTimeRowPositionInGrid(time: number, startDate: number) {
  return Math.floor((time - startDate) / TimespanUnit);
}

function getPresentationCellStyles(
  startDate: number,
  presentation: PresentationWithDates | BreakWithDates
): CSSProperties {
  const cellStart = getTimeRowPositionInGrid(
    presentation.startDate.getTime(),
    startDate
  );
  const cellEnd = getTimeRowPositionInGrid(
    presentation.endDate.getTime(),
    startDate
  );
  let columLocation: CSSProperties = { gridColumnStart: 2, gridColumnEnd: 4 };
  switch (presentation.room) {
    case "IB028":
      columLocation = { gridColumnStart: 2, gridColumnEnd: 3 };
      break;
    case "IB025":
      columLocation = { gridColumnStart: 3, gridColumnEnd: 4 };
      break;
  }
  return {
    ...columLocation,
    gridRowStart: cellStart + 1,
    gridRowEnd: cellEnd + 1,
  };
}
