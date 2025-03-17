import { StreamData } from "./models";

export async function getVideoData(endpoint: string) {
  const response = await fetch(`${process.env.BACKEND_URL}/proto/${endpoint}`, {
    next: { revalidate: 30 * 60 },
  });
  if (!response.ok) {
    console.error(response);
    return;
  }
  return await response.json();
}

export async function getStreams(): Promise<StreamData[] | undefined> {
  return [
    {
      title: "IB028",
      youtubeUrl:
        "https://www.youtube.com/embed/YuVv9nAEvL4?si=oAFL-LDh1shNawwx",
    },
    {
      title: "IB025",
      youtubeUrl:
        "https://www.youtube.com/embed/CUUHlpO-kzk?si=D-m9Z56Xo0Y1qkez",
    },
  ];
  return getVideoData("streams");
}
