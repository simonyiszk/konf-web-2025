import { PromoVideoData } from "@/models/models";

import { YoutubeVideo } from "./youtube-video";
import { ContentLayout } from "../layout";

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({ data: { sectionTitle, youtubeUrl } }: Props) {
  return (
    <div className="flex flex-col items-center p-8 w-full px-auto relative z-10">
      <ContentLayout>
        <h1 className="xs:text-4xl sm:text-6xl text-xl font-bold text-center">
          {sectionTitle}
        </h1>
        <div className="mt-8 gap-4 xl:w-[900px] w-4/5">
          <YoutubeVideo title={sectionTitle} url={youtubeUrl} />
        </div>
      </ContentLayout>
    </div>
  );
}
