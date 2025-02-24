export default function WithContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container size-full">{children}</main>;
}
