export default function FullWidthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="size-full">{children}</main>;
}
