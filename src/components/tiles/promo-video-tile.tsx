import { PromoVideoData } from "@/models/models";

import { YoutubeVideo } from "./youtube-video";

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({ data: { sectionTitle, youtubeUrl } }: Props) {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-[0.15] p-8 w-full px-auto relative">
      <h1 className="xs:text-4xl sm:text-6xl text-xl font-bold text-center">
        {sectionTitle}
      </h1>
      <div className="mt-8 gap-4 xl:w-[900px] w-4/5">
        <YoutubeVideo title={sectionTitle} url={youtubeUrl} />
      </div>
    </div>
  );
}
