import { StreamData } from "./models";

export async function getVideoData(endpoint: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/proto/${endpoint}`,
    {
      next: { revalidate: 30 * 60 },
    }
  );
  if (!response.ok) {
    console.error(response);
    return;
  }
  return await response.json();
}

export async function getStreams(): Promise<StreamData[] | undefined> {
  return getVideoData("streams");
}
