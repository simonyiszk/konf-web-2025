import { Ticket } from "@/components/hero/ticket";
import CountdownTile from "@/components/tiles/countdown-tile/countdown-tile";
import MapTile from "@/components/tiles/map-tile/map-tile";
import { WorkshopTile } from "@/components/tiles/workshop-tile";

export default async function Landing() {
  // const data = await getIndexData();
  // if (!data) {
  //   redirect("/error");
  // }
  return (
    <div className="flex-grow relative flex flex-col justify-center items-center self-stretch overflow-hidden">
      <Ticket />
      <div className="relative">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-6 max-w-6xl w-full mt-40 gap-6 px-4 sm:px-6 xl:px-0">
            <CountdownTile />
            <WorkshopTile />
            <MapTile />
          </div>
        </div>
        {/* {data.previousConferences.conferences.length > 0 && (
          <ImageCarouselSection data={data.previousConferences} />
        )} */}
      </div>
      {/* <SponsorSection
        companies={data.sponsors.companies}
        sectionTitle={data.sponsors.sectionTitle}
      /> */}
    </div>
  );
}
