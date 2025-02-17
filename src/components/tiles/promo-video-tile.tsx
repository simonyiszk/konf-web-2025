import { PromoVideoData } from "@/models/models";

import { Tile } from "./tile";
import { YoutubeVideo } from "./youtube-video";

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({
  data: { description, sectionTitle, youtubeUrl },
}: Props) {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-[0.15] p-8 w-full px-auto relative">
      <h2 className="text-4xl sm:text-6xl font-bold">{sectionTitle}</h2>
      <div className="mt-8 gap-4  w-[900px]">
        {/* <p className="text-lg sm:text-xl font-medium w-full">{description}</p> */}
        <YoutubeVideo title={sectionTitle} url={youtubeUrl} />
      </div>
    </div>
  );
}
