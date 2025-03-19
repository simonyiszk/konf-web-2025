export const dynamic = "force-dynamic";
import Hero from "@/components/hero/Hero";
import { ImageCarouselSection } from "@/components/image-carousel/image-carousel-section";
import { SponsorSection } from "@/components/sponsors/sponsor-section";
import { MobilAppTile } from "@/components/tiles/mobil-app-tile";
import { PromoVideoTile } from "@/components/tiles/promo-video-tile";
import { YoutubeVideoTile } from "@/components/tiles/youtube-video-tile";
import { getIndexData } from "@/models/get-index-data";
import { getStreams } from "@/models/get-youtube-video-data";
import { StreamData } from "@/models/models";
import { redirect } from "next/navigation";

export default function Landing() {
  const data = getIndexData();
  const streams: StreamData[] | undefined = getStreams();
  if (!data) {
    redirect("/error");
  }
  const appData = data.mobilApp;
  return (
    <div className="flex-grow relative flex flex-col justify-center items-center w-full">
      <Hero />
      {streams && (
        <div className="w-full flex flex-col gap-16 items-center">
          <h1>Kövesd élőben a konferenciát!</h1>
          <div className="flex flex-col xl:flex-row w-full justify-center gap-16 mb-40 items-center px-8 lg:px-16">
            {streams.map((stream) => (
              <YoutubeVideoTile
                key={stream.title}
                title={stream.title}
                youtubeUrl={stream.youtubeUrl}
              />
            ))}
          </div>
        </div>
      )}
      <PromoVideoTile data={data.promoVideo} />
      <MobilAppTile data={appData} />
      {data.previousConferences.conferences.length > 0 && (
        <ImageCarouselSection data={data.previousConferences} />
      )}
      <SponsorSection
        companies={data.sponsors.companies}
        sectionTitle={data.sponsors.sectionTitle}
      />
    </div>
  );
}
