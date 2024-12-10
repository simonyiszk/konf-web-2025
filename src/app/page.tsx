import Image from "next/image";
import Button from "./components/button";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

const cygrotesk = localFont({
  src: "./fonts/CyGrotesk.woff",
  fallback: ["sans-serif"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className={`flex flex-row h-full w-full ${interTight.className}`}>
      <div className="flex-1 hidden sm:block">
        <Image
          src="/web_0_hatter.webp"
          alt="Simonyi Konferencia"
          width={4061}
          height={3366}
          sizes="100vh"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-36 right-32 invisible sm:visible">
        <h1
          className={`2xl:text-9xl xl:text-8xl text-5xl md:text-7xl ${cygrotesk.className}`}
        >
          2025.03.18.
        </h1>
        <Image
          src="/logo.svg"
          alt="Konferencia Logo"
          width={60}
          height={60}
          className="absolute top-0 right-0 md:w-14 md:h-14 xl:w-16 xl:h-16 h-12 w-12 -translate-y-1/2 translate-x-full"
        />
      </div>
      <main className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-between p-4">
        <header className="flex flex-row justify-between">
          <h2>Simonyi</h2>
          <h2>Konferencia</h2>
        </header>
        <div className="h-full justify-center flex flex-col items-center self-center sm:invisible visible">
          <div className="flex flex-col gap-6 w-fit">
            <div className="flex flex-col items-center relative">
              <Image
                src="/logo.svg"
                alt="Konferencia Logo"
                width={30}
                height={30}
                className="absolute top-0 right-0 -translate-y-1/2 translate-x-full"
              />
              <h1>2025.</h1>
              <h1>03.</h1>
              <h1>18.</h1>
            </div>
            <Button
              text="XXI. Simonyi Konferencia"
              href="https://xxi.konferencia.simonyi.bme.hu/"
            />
            <Button
              text="Instagram"
              href="https://www.instagram.com/simonyikonf"
            />
            <Button
              text="Facebook"
              href="https://www.facebook.com/simonyikonferencia"
            />
          </div>
        </div>
        <div className="absolute top-1/2 flex flex-col items-center self-center  sm:visible invisible">
          <div className="flex flex-col gap-6 w-fit">
            <Button
              text="XXI. Simonyi Konferencia"
              href="https://xxi.konferencia.simonyi.bme.hu/"
            />
            <Button
              text="Instagram"
              href="https://www.instagram.com/simonyikonf"
            />
            <Button
              text="Facebook"
              href="https://www.facebook.com/simonyikonferencia"
            />
          </div>
        </div>
        <footer className="flex flex-row justify-between">
          <h2>Konferencia</h2>
          <h2>Simonyi</h2>
        </footer>
      </main>
    </div>
  );
}
