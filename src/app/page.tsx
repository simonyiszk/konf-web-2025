import Hero from "@/components/hero/Hero";

export default async function Landing() {
  // const data = await getIndexData();
  // if (!data) {
  //   redirect("/error");
  // }
  return (
    <div>
      {/* <HeroTicketFront /> */}
      <Hero />
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
