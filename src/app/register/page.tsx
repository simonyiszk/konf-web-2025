import GiveAway from "@/components/giveaway/giveaway";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-[#dee2d4] flex flex-col p-4 px-8 text-[--background] relative">
        <div className="absolute w-full h-full opacity-80 bg-black top-0 left-0 flex flex-col justify-center text-center items-center z-50 text-[--foreground]">
          <h1>
            A regisztráció <br />
            <b className="text-white">02.18 18:00</b>
            <br /> indul
          </h1>
          <CountdownTileImplementation />
        </div>
        <h1>REGISZTRÁCIÓ</h1>
        <div className="flex flex-row gap-16 p-16 h-2/3 justify-center items-center relative">
          <form className="space-y-6 flex flex-col gap-4">
            <div>
              <label className="block text-lg font-bold">Név</label>
              <input
                type="text"
                className="w-full bg-transparent border-b-2 border-black focus:outline-none placeholder-[#50494e80] text-xl"
                placeholder="Simonyi Károly"
              />
            </div>

            <div>
              <label className="block text-lg font-bold">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b-2 border-black focus:outline-none placeholder-[#50494e80] text-xl"
                placeholder="simonyi@simony.bme.hu"
              />
            </div>

            <button
              type="submit"
              className="w-full font-bold py-3 bg-[--background] transition-all text-[--foreground] hover:scale-[1.1]"
            >
              Regisztráció
            </button>
          </form>
          <GiveAway />
        </div>
      </div>
    </div>
  );
}
