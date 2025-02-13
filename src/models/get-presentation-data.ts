import { getIndexData } from "@/models/get-index-data";

import { PresentationModel, PresentationWithDates } from "./models";

async function getPresentationBreaks() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/proto/breaks`,
    {
      next: { revalidate: 30 * 60 },
    }
  );
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
  if (!indexData || !indexData.presentations) {
    return;
  }
  const breaks: PresentationModel[] = await getPresentationBreaks();
  if (!breaks) {
    return;
  }
  const placeholders = breaks.map((presentation) => ({
    ...presentation,
    placeholder: true,
  }));
  const allPresentations: PresentationModel[] = [
    ...indexData.presentations,
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
