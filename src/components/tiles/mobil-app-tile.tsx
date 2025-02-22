import { MobilAppData } from "@/models/models";
import { Ticket } from "../hero/ticket";

type Props = {
  data: MobilAppData;
};

export function MobilAppTile({ data }: Props) {
  return (
    <div className="hover:scale-105 transition-transform duration-200 ease-in-out lg:w-[900px] lg:h-[400px] h-auto my-12 w-4/5">
      <Ticket>
        <div className="border-[--bg-konf-foreground] lg:p-8 w-full">
          <h1 className="text-2xl sm:text-[28px] text-[--bg-konf-foreground] pb-4">
            KonferenciApp
          </h1>
          <div className="flex flex-col gap-16 lg:gap-8 lg:flex-row w-full justify-between mt-4 items-center">
            <img
              src="/img/applogo.png"
              className="object-cover rounded-2xl h-[100px] mr-3"
              alt="App screens"
            />
            <p className="text-[--bg-konf-foreground] text-[18px] whitespace-pre-line lg:w-4/5 h-full items-center">
              {data.description}
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:items-end items-center lg:gap-6 gap-6 p-6 mt-4">
            <a href={data.iosUrl} target="_blank">
              <img
                className="h-[50px] min-w-[150px]"
                src="/img/appstore.svg"
                alt="App Store"
              />
            </a>
            <a href={data.androidUrl} target="_blank">
              <img
                className="h-[50px] min-w-[150px]"
                src="/img/gplay.png"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </Ticket>
    </div>
  );
}
