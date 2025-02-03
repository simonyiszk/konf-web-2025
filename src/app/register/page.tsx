import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-[#dee2d4] flex flex-col p-4 px-8 text-[--background]">
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
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl">NYEREMÉNYJÁTÉK*</h1>
            <Image
              src="/register/nintendo.svg"
              width={800}
              height={400}
              alt="Nintendo"
            />
            <h1 className="text-4xl">NINTENDO SWITCH</h1>
            <div className="flex flex-row gap-4 items-center justify-center">
              <Image
                src="/register/monitor.svg"
                width={100}
                height={100}
                alt="Monitor"
              />
              <h3>
                Az első 500 jelentkező között <br />
                kisorsolunk egy monitort*
              </h3>
              <Image
                className="ml-10"
                src="/register/totebag.svg"
                width={80}
                height={80}
                alt="Vászontáska"
              />
              <h3>
                Az első 50 jelentkező ajándékba <br />
                kap egy vászontáskát*
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
