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
    <Tile className="sm:col-span-6">
      <Tile.Body>
        <h2 className="text-4xl sm:text-6xl font-bold">{sectionTitle}</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <p className="text-lg sm:text-xl font-medium w-full">{description}</p>
          <YoutubeVideo title={sectionTitle} url={youtubeUrl} />
        </div>
      </Tile.Body>
    </Tile>
  );
}
