import KonfLogo from "@/components/svgs/Konf";
import Link from "next/link";

export default function RegisterSuccessPage() {
  return (
    <Link
      href="/"
      className="flex flex-col justify-center items-center h-screen gap-4"
    >
      <h1>Sikeres regisztráció!</h1>
      <KonfLogo className="fill-[--foreground]" width={80} height={100} />
    </Link>
  );
}
