import { Ticket } from "@/components/hero/ticket";
import { ArrowRightSquare } from "lucide-react";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";
import KonfLogo from "@/components/svgs/Konf";
import Image from "next/image";

export default function HeroTicketSmall() {
  return (
    <Ticket>
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-row w-full justify-between">
          <KonfLogo className="fill-primary" width={80} height={90} />
          <div className="text-2xl font-bold text-center flex flex-col items-center justify-center">
            <p>2025.03.18.</p>
          </div>
          <Image
            src="qr-code.svg"
            width={80}
            height={80}
            alt={"https://konferencia.simonyi.bme.hu/"}
          />
        </div>
        <h1 className="text-primary font-bold leading-tight text-2xl sm:text-3xl md:text-4xl text-center pb-4">
          Simonyi
          <br />
          Konferencia
        </h1>
        <div className="flex flex-col items-center">
          <CountdownTileImplementation />
          <a
            className="font-bold flex flex-row w-full p-4 px-6 my-4 bg-[--foreground] transition-all text-[--background] justify-center items-center "
            href="/register"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl">Regisztráció</h1>
            <ArrowRightSquare className="inline ml-2 h-4/5 w-fit" />
          </a>
        </div>
      </div>
    </Ticket>
  );
}
