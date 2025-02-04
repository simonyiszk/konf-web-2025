import Image from "next/image";
export default function GiveAway() {
  return (
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
  );
}
