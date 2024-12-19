import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Simonyi Konferencia - 2025. 03. 18.",
    template: "Simonyi Konferencia - %s",
  },
  authors: {
    name: "Simonyi Károly Szakkollégium",
    url: "https://simonyi.bme.hu",
  },
  description:
    "Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája.",
  keywords:
    "Simonyi Konferencia 2025, technológiai konferencia, egyetemi rendezvény, hallgatók, hallgatók szervezése, Simonyi Károly Szakkollégium, BME-VIK, innováció, digitalizáció, műszaki fejlesztések, tudományos esemény, inspiráló előadások, szakmai workshopok, Magyarország eseményei, fiatal tehetségek, digitális megoldások, jövő technológiái, iparági trendek, tudásátadás, innovatív gondolkodás, egyetemi közösség, kreatív technológia, networking lehetőségek, szakmai előadók, technológiai innovációk, informatikai fejlődés, egyetemi tapasztalatok, mérnöki világ, vezető szakemberek, digitális társadalom, tudományos találkozó",
  other: {
    "google-site-verification": "IEdi66LPaMH1EMd-iMpGGl13QKlQTBIFTNL7TEv2tY8",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased h-screen max-h-screen overflow-y-hidden"}>
        {children}
      </body>
    </html>
  );
}
