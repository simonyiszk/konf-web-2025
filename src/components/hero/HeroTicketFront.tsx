import { Ticket } from "./ticket";
import KonfLogo from "../svgs/Konf";
import { Barcode } from "../svgs/Barcode";
import Image from "next/image";
import CountdownTileImplementation from "../tiles/countdown-tile/countdown-implementation";

export default function HeroTicketFront() {
  const serial = "konf"
    .split("")
    .map((e) => e.charCodeAt(0) - "a".charCodeAt(0))
    .join(" ");
  return (
    <Ticket>
      <div className="h-full flex flex-row items-center w-fit justify-center gap-2">
        <Barcode className="fill-primary h-full" />
        <div className="w-[24px] -rotate-90 flex flex-col items-center justify-end">
          <p className="text-xs text-nowrap w-fit h-fit ">
            facebook.com/simonyikonferencia
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between w-2/3">
        <h1 className="font-bold leading-tight text-primary">
          Simonyi
          <br />
          Konferencia
        </h1>
        <div>
          <span className="text-2xl font-bold">2025.03.18.</span>
          <p className="text-md mt-2 font-bold">
            Magyarország legnagyobb egyetemi hallgatók által szervezett éves
            technológiai konferenciája.
          </p>
        </div>
        <CountdownTileImplementation />
      </div>
      <div className="flex flex-col justify-between items-center">
        <KonfLogo className="fill-primary" width={80} height={90} />
        <div className="text-2xl font-bold rotate-90">{serial}</div>
        <Image
          src="qr-code.svg"
          width={80}
          height={80}
          alt={"https://konferencia.simonyi.bme.hu/"}
        />
      </div>
    </Ticket>
  );
}
