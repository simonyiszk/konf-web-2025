"use client";
import GiveAway from "@/components/giveaway/giveaway";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";
import React, {useMemo} from "react";

export default function RegisterPage() {
  const target = useMemo(() => new Date(2025, 1, 18, 18, 0), []);
  const showCountDown = target.getTime() > Date.now();
  return (
    <div className="flex justify-center items-center">
      <div className="bg-background-800 flex flex-col p-4 px-8 relative">
        {showCountDown && (
          <div
            className="absolute w-full h-full opacity-80 bg-black top-0 left-0 flex flex-col justify-center text-center items-center z-10 text-[--foreground]">
            <div className="mb-16">
              <CountdownTileImplementation/>
            </div>
            <h1 className="text-xl lg:text-3xl text-gray-300">
              A regisztráció kezdete
              <br/>
              <b className="text-gray-300">02.18 18:00</b>
            </h1>
          </div>
        )}
        <h1>REGISZTRÁCIÓ</h1>
        <div className="flex flex-col lg:flex-row gap-16 p-4 md:p-16 h-2/3 justify-center items-center relative">
          <form
            className="space-y-6 flex flex-col gap-4 lg:min-w-[300px] max-lg:w-full opacity-25"
          >
            <div>
              <label className="block cursor-not-allowed text-lg font-bold">Név</label>
              <input
                name="name"
                type="text"
                className="w-full bg-transparent border-b-2 cursor-not-allowed border-black focus:outline-none text-xl"
                placeholder="Simonyi Károly"
                disabled={true}
              />
            </div>

            <div>
              <label className="block cursor-not-allowed text-lg font-bold">Email</label>
              <input
                name="email"
                type="email"
                className="w-full bg-transparent cursor-not-allowed border-b-2 border-black focus:outline-none text-xl"
                placeholder="simonyi@simony.bme.hu"
                disabled={true}
              />
            </div>
            <div className="relative">
              <button
                type="submit"
                className="w-full cursor-not-allowed font-bold py-3 bg-primary transition-all"
                disabled={true}
              >
                Regisztráció
              </button>
            </div>
          </form>
          <div>
            <GiveAway/>
          </div>
        </div>
      </div>
    </div>
  );
}
