import clsx from "clsx";

export const Ticket = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div
      className={clsx(
        className,
        "relative w-full h-full bg-background-800 border-primary border-2 p-6 shadow-ticket shadow-current flex flex-row justify-between"
      )}
    >
      {children}
    </div>
  );
};
