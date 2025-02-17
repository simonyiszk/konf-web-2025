import { ArrowRightSquare } from "lucide-react";
import { Ticket } from "./ticket";

export default function HeroTicketBack() {
  return (
    <Ticket>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <a
          className="font-bold flex flex-row p-4 px-6 bg-[--foreground] transition-all text-[--background] items-center "
          href="/register"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Regisztráció</h1>
          <ArrowRightSquare className="inline ml-2 h-4/5 w-fit" />
        </a>
      </div>
    </Ticket>
  );
}
