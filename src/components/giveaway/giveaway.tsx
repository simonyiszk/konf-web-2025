import Image from "next/image";

const items = [
  {
    src: "/register/monitor.svg",
    text: "Az első 500 jelentkező között kisorsolunk egy monitort",
    alt: "Monitor",
  },
  {
    src: "/register/totebag.svg",
    text: "Az első 50 jelentkező ajándékba kap egy vászontáskát",
    alt: "Vászontáska",
  },
];

export default function GiveAway() {
  return (
    <div className="flex flex-col gap-4 items-center max-md:w-full overflow-hidden">
      <h1 className="text-2xl lg:text-4xl">NYEREMÉNYJÁTÉK*</h1>
      <div className="relative h-80 w-full">
        <Image src="/register/nintendo.svg" fill alt="Nintendo" />
      </div>
      <h1 className="text-xl lg:text-3xl">NINTENDO SWITCH</h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        {items.map(({ src, alt, text }) => (
          <div
            key={src}
            className="flex flex-col justify-center items-center gap-4"
          >
            <div className="size-32 relative">
              <Image src={src} fill alt={alt} />
            </div>
            <h3 className="text-center max-w-[15rem]">{text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
