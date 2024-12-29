import Image from "next/image";
import Button from "./components/button";
import { socialLinks } from "./utils/constants";
import { Variant1 } from "@/app/components/hero";

const socials = [
  socialLinks.konfSitePrevious,
  socialLinks.instagram,
  socialLinks.facebook,
];

export default function Home() {
  return (
    <div className="w-full h-svh flex flex-row justify-center items-center">
      <Variant1 />
    </div>
  );
}
