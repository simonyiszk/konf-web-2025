import Hero from "@/components/hero/Hero";
import { MobilAppTile } from "@/components/tiles/mobil-app-tile";
import { MobilAppData } from "@/models/models";

//export default async function Landing() {
// const data = await getIndexData();
// if (!data) {
//   redirect("/error");
// }
export default async function Landing() {
  const appData: MobilAppData = {
    iosUrl: "https://apps.apple.com/hu/app/konferenciapp/id123456789",
    description: "",
    androidUrl: "",
  };
  return (
    <div>
      {/* <HeroTicketFront /> */}
      <Hero />
      <MobilAppTile data={appData} />
      {/* <div className="relative">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-6 max-w-6xl w-full mt-40 gap-6 px-4 sm:px-6 xl:px-0">
            <WorkshopTile />
            <MapTile />
          </div>
        </div>
      </div> */}
      {/* {data.previousConferences.conferences.length > 0 && (
          <ImageCarouselSection data={data.previousConferences} />
        )} */}
      {/* <SponsorSection
        companies={data.sponsors.companies}
        sectionTitle={data.sponsors.sectionTitle}
      /> */}
    </div>
  );
}
