import Image from "next/image";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex-1">
        <Image
          src="/web_0_hatter.webp"
          alt="Simonyi Konferencia"
          width={4061}
          height={3366}
          sizes="100vh"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-36 right-32 pr-12 pt-12">
        <h1 className="2xl:text-9xl xl:text-8xl text-5xl md:text-7xl">
          2025.03.18.
        </h1>
        <Image
          src="/logo.svg"
          alt="Konferencia Logo"
          width={60}
          height={60}
          className="absolute top-0 right-0"
        />
      </div>
      <main className="w-1/3 flex flex-col justify-between p-4">
        <header className="flex flex-row justify-between">
          <h1>Simonyi</h1>
          <h1>Konferencia</h1>
        </header>
        <div className="flex items-center flex-col">
          <div className="flex flex-col gap-6 px-14 w-fit pt-24">
            <Button
              text="XXI. Simonyi Konferencia"
              href="https://xxi.konferencia.simonyi.bme.hu/"
            />
            <Button
              text="Instagram"
              href="https://www.instagram.com/simonyikonferencia/"
            />
            <Button
              text="Facebook"
              href="https://www.facebook.com/simonyikonferencia"
            />
          </div>
        </div>
        <footer className="flex flex-row justify-between">
          <h1>Konferencia</h1>
          <h1>Simonyi</h1>
        </footer>
      </main>
    </div>
  );
}
