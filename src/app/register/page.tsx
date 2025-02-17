import GiveAway from "@/components/giveaway/giveaway";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";
import { useMemo } from "react";

export default function RegisterPage() {
  const target = useMemo(() => new Date(2025, 1, 18, 18, 0), []);
  const showCountDown = target.getTime() > Date.now();
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#dee2d4] flex flex-col max-w-6xl p-4 px-8 text-[--background] relative">
        {showCountDown && (
          <div className="absolute w-full h-full opacity-80 bg-black top-0 left-0 flex flex-col justify-center text-center items-center z-10 text-[--foreground]">
            <div className="mb-16">
              <CountdownTileImplementation />
            </div>
            <h1 className="text-xl lg:text-3xl text-gray-300">
              A regisztráció kezdete
              <br />
              <b className="text-gray-300">02.18 18:00</b>
            </h1>
          </div>
        )}
        <h1>REGISZTRÁCIÓ</h1>
        <div className="flex flex-col lg:flex-row gap-16 p-4 md:p-16 h-2/3 justify-center items-center relative">
          <form className="space-y-6 flex flex-col gap-4 lg:min-w-[300px] max-lg:w-full">
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
                placeholder="simonyi@simonyi.bme.hu"
              />
            </div>

            <button
              type="submit"
              className="w-full font-bold py-3 bg-[--background] transition-all text-[--foreground] hover:scale-[1.1]"
            >
              Regisztráció
            </button>
          </form>
          <div className="">
            <GiveAway />
          </div>
        </div>
      </div>
    </div>
  );
}
