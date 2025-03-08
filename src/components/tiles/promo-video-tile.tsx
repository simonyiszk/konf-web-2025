import { PromoVideoData } from "@/models/models";

import { YoutubeVideo } from "./youtube-video";
import { ContentLayout } from "../layout";

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({ data: { sectionTitle, youtubeUrl } }: Props) {
  return (
    <ContentLayout>
      <div className="flex flex-col items-center justify-center p-8 w-full px-auto relative z-10 gap-8">
        <h1 className="xs:text-4xl sm:text-6xl text-xl font-bold text-center">
          {sectionTitle}
        </h1>
        <YoutubeVideo title={sectionTitle} url={youtubeUrl} />
      </div>
    </ContentLayout>
  );
}
