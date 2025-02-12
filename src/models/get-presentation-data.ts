import { getIndexData } from "@/models/get-index-data";

import { PresentationModel, PresentationWithDates } from "./models";
import { breaksData } from "./static/breaksData";
import { conferenceData } from "./static/conferenceData";

async function getPresentationBreaks() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/proto/breaks`,
    {
      next: { revalidate: 30 * 60 },
    }
  );
  console.log(res);
  if (!res.ok) {
    console.error(res);
    return;
  }
  return res.json();
}

export async function getPresentationData(): Promise<
  PresentationWithDates[] | undefined
> {
  const indexData = await getIndexData();
  const staticPresentations = conferenceData.presentations;
  if (!indexData || !indexData.presentations) {
    return;
  }
  // const breaks: Presentation[] = await getPresentationBreaks();
  const breaks = breaksData as PresentationModel[];
  if (!breaks) {
    return;
  }
  const placeholders = breaks.map((presentation) => ({
    ...presentation,
    placeholder: true,
  }));
  const allPresentations: PresentationModel[] = [
    ...staticPresentations,
    ...placeholders,
  ];
  const merged = allPresentations.map((presentation) => ({
    ...presentation,
    startDate: new Date(presentation.startTime),
    endDate: new Date(presentation.endTime),
  }));
  merged.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  return merged;
}
