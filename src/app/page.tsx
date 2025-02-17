import Hero from "@/components/hero/Hero";
import { ImageCarouselSection } from "@/components/image-carousel/image-carousel-section";
import { SponsorSection } from "@/components/sponsors/sponsor-section";
import { MobilAppTile } from "@/components/tiles/mobil-app-tile";
import { PromoVideoTile } from "@/components/tiles/promo-video-tile";
import { getIndexData } from "@/models/get-index-data";
import { redirect } from "next/navigation";

export default async function Landing() {
  const data = await getIndexData();
  if (!data) {
    redirect("/error");
  }
  const appData = data.mobilApp;
  return (
    <div className="flex-grow relative flex flex-col justify-center items-center w-full">
      <Hero />
      {/* <div className="relative">
        <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-6 max-w-6xl w-full mt-40 gap-6 px-4 sm:px-6 xl:px-0">
        <WorkshopTile />
        <MapTile />
        </div>
        </div>
        </div> */}
      {data.previousConferences.conferences.length > 0 && (
        <ImageCarouselSection data={data.previousConferences} />
      )}
      <PromoVideoTile data={data.promoVideo} />
      <MobilAppTile data={appData} />
      <SponsorSection
        companies={data.sponsors.companies}
        sectionTitle={data.sponsors.sectionTitle}
      />
    </div>
  );
}
