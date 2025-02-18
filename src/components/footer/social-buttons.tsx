import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function SocialButtons() {
  return (
    <div className="flex justify-center md:justify-start gap-12 md:gap-16 text-[40px]">
      <Link
        href="mailto:konferencia@simonyi.bme.hu"
        className="brand-link"
        target="blank"
      >
        <FaEnvelope />
      </Link>
      <Link
        href="https://www.instagram.com/simonyikonf"
        className="brand-link"
        target="blank"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.facebook.com/events/551671120833294"
        className="brand-link"
        target="blank"
      >
        <FaFacebook />
      </Link>
    </div>
  );
}
