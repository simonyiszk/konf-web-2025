import Link from "next/link";

import { YoutubeVideo } from "@/components/youtube-video";
import { Ticket } from "../hero/ticket";

type Props = {
  title: string;
  youtubeUrl: string;
  link?: string;
};
export function YoutubeVideoTile({ title, youtubeUrl, link }: Props) {
  return (
    <div className="xl:w-[45%] w-full">
      <Ticket className="p-2">
        <div className="w-full">
          <h1 className="sm:text-2xl md:text-3xl text-center mb-5 capitalize">
            {title}
          </h1>
          <div className="sm:w-full flex justify-center mt-2">
            <YoutubeVideo title={title} url={youtubeUrl} />
          </div>
          {link && (
            <div className="flex justify-center pt-8">
              <Link
                href={link}
                className="inline-flex items-center font-semibold text-xl text-white brand-link"
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
            </div>
          )}
        </div>
      </Ticket>
    </div>
  );
}
