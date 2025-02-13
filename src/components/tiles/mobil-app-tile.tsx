import Link from "next/link";
import { MobilAppData } from "@/models/models";
import { Tile } from "./tile";
import { Ticket } from "../hero/ticket";

type Props = {
  data: MobilAppData;
};

export function MobilAppTile({ data }: Props) {
  return (
    <div className="hover:scale-105 transition-transform duration-200 ease-in-out w-[900px] h-[400px]">
      <Ticket>
        <div className="border-[--bg-konf-foreground] lg:p-8 w-full">
          <h1 className="text-2xl sm:text-[28px] text-[--bg-konf-foreground]">
            KonferenciApp
          </h1>
          <div className="flex flex-row gap-16 lg:gap-8 lg:flex-row w-full justify-between mt-4 items-center">
            <img
              src="/img/konferenciapp.png"
              className="object-cover rounded-2xl h-[200px] mr-3"
              alt="App screens"
            />
            <div className="flex flex-col items-start gap-4">
              <p className="text-[--bg-konf-foreground] text-[18px] whitespace-pre-line lg:w-4/5 h-full items-center">
                Töltsd le a mobil appot, hogy élőben követhesd a konferencia
                eseményeit és kérdezhess az előadóktól!
              </p>
              <div className="flex lg:flex-row flex-row justify-start lg:gap-6 gap-3 items-center mt-4">
                <a href={data.iosUrl} target="_blank">
                  <img
                    className="h-[50px] min-w-[150px]"
                    src="/img/appstore.svg"
                    alt="App Store"
                  />
                </a>
                <a href={data.iosUrl} target="_blank">
                  <img
                    className="h-[50px] min-w-[150px]"
                    src="/img/gplay.png"
                    alt="Google Play"
                  />
                </a>
              </div>
            </div>
          </div>
          <Link
            href="/mobile"
            className="mt-4 inline-flex w-full justify-center items-center font-semibold text-lg text-[--bg-konf-foreground] border border-[--bg-konf-foreground] px-4 py-2 rounded-lg hover:bg-[--foreground] hover:text-[--background] transition"
          >
            Részletek
            <svg
              className="w-3 h-3 ml-2 rtl:rotate-180"
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
        </div>
      </Ticket>
    </div>
  );
}
