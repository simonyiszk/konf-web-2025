import KonfLogo from "../svgs/Konf";
import { Barcode } from "../svgs/Barcode";

export const Ticket = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-[800px] h-[400px]  border-[--foreground] border-2 p-6 shadow-ticket shadow-current flex flex-row justify-between">
        <div className="h-full overflow-hidden flex flex-row items-center">
          <Barcode className="fill-[--foreground] h-full" />
          <p className="text-xs -rotate-90">facebook.com/simonyikonferencia</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-4xl font-bold">
            Simonyi
            <br />
            Konferencia
          </div>
          <div className="text-2xl font-bold">2025.03.18.</div>
          <div className="text-sm text-[#ffac8a] mt-2">
            Magyarország legnagyobb egyetemi hallgatók által szervezett éves
            technológiai konferenciája.
          </div>
          <h1>COUNTDOWN</h1>
        </div>
        <div className="flex flex-col justify-between">
          <KonfLogo className="fill-[--foreground]" />
          <div className="text-2xl font-bold">012345678</div>
          <div>QR</div>
        </div>
      </div>
    </div>
  );
};
