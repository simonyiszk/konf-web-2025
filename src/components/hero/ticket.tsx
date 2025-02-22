export const Ticket = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative w-full h-full bg-background-800 border-primary border-2 p-6 shadow-ticket shadow-current flex flex-row justify-between">
      {children}
    </div>
  );
};
