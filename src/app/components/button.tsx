type ButtonProps = {
  text: string;
  href: string;
};
export default function Button({ text, href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="border-white border-2 text-center p-4"
    >
      {text}
    </a>
  );
}
