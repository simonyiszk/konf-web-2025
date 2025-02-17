import { PromoVideoData } from "@/models/models";

import { YoutubeVideo } from "./youtube-video";

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({ data: { sectionTitle, youtubeUrl } }: Props) {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-[0.15] p-8 w-full px-auto relative">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        {sectionTitle}
      </h1>
      <div className="mt-8 gap-4  w-[900px]">
        <YoutubeVideo title={sectionTitle} url={youtubeUrl} />
      </div>
    </div>
  );
}
