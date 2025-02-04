import Link from "next/link";

import { GiveawayData } from "@/models/models";

import { Tile } from "./tile";
import GiveAway from "../giveaway/giveaway";

type Props = {
  data: GiveawayData;
  showLink?: boolean;
};

export function GiveawayTile({
  data: { description },
  showLink = true,
}: Props) {
  const [preText, shinyText, postText] = description.split("***");
  return (
    <Tile className="sm:col-span-6">
      <Tile.Body>
        <GiveAway />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p className="text-lg sm:text-xl font-medium text-justify w-full">
              {preText}
            </p>
            <h3 className="text-5xl sm:text-6xl font-bold text-[#FFE500]">
              {shinyText}
            </h3>
            <p className="text-lg sm:text-xl font-medium text-justify w-full">
              {postText}
            </p>
          </div>
        </div>
        {showLink && (
          <Link
            href="/giveaway"
            className="mt-6 inline-flex w-full justify-center items-center font-semibold text-xl text-white brand-link"
          >
            Részletek
            <svg
              className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        )}
      </Tile.Body>
    </Tile>
  );
}
