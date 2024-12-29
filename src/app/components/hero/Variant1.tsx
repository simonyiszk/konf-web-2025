import KonfLogo from "@/app/components/svg/konfLogo";
import { konfDate, socialLinks } from "@/app/utils/constants";
import { SVGProps } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

function Cirlce({
  filled,
  ...props
}: { filled?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {filled ? (
        <rect width="20" height="20" rx="10" className="fill-konf-foreground" />
      ) : (
        <rect
          x="1"
          y="1"
          width="18"
          height="18"
          rx="9"
          className="stroke-konf-foreground"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}

function BottomPart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 198 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="198"
        height="20"
        rx="10.5"
        className="fill-konf-foreground"
      />
    </svg>
  );
}

function AbstractSvg() {
  const [filledValue, emptyValue] = [2, 4];

  return (
    <figure className="flex flex-col justify-end gap-2">
      <div className="flex flex-row justify-between">
        {Array.from({ length: filledValue }).map((_) => {
          return (
            <div>
              <Cirlce className="size-3 md:size-5" filled />
            </div>
          );
        })}
        {Array.from({ length: emptyValue }).map((_) => (
          <Cirlce className="size-3 md:size-5" />
        ))}
      </div>
      <BottomPart className="h-2 md:h-5 w-full" />
    </figure>
  );
}

export function HeroVariant1() {
  return (
    <section className="font-cygrotesk text-3xl md:text-6xl flex flex-col gap-3 md:gap-7">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <KonfLogo className="fill-konf-foreground size-28" />
        <div>
          <div className="flex flex-row gap-2">
            <h1>Simonyi</h1>
            <AbstractSvg />
          </div>
          <h1>Konferencia</h1>
        </div>
      </div>
      <h2 className="text-2xl md:text-5xl text-center">
        {konfDate.toLocaleDateString("hu")}
      </h2>
      <div className="flex flex-row gap-2 justify-center text-5xl">
        <a href={socialLinks.facebook.href}>
          <FaFacebook />
        </a>
        <a href={socialLinks.instagram.href}>
          <FaInstagram />
        </a>
        <a href={socialLinks.simonyiYoutube.href}>
          <FaYoutube />
        </a>
      </div>
    </section>
  );
}
