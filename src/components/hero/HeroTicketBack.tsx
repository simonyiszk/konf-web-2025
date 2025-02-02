import { Ticket } from "./ticket";

export default function HeroTicketBack() {
  return (
    <Ticket>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <a href="/register">Register</a>
      </div>
    </Ticket>
  );
}
