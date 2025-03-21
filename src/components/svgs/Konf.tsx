export default function KonfLogo({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.88 28.9"
      width={width || 23}
      height={height || 29}
      className={className}
    >
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1-2">
          <path d="M13.73.79V6.5h2.94V.79Zm0,0V6.5h2.94V.79Z" />
          <path d="M20,.68H17.68V.17c0-.06,0-.11-.05-.11A.19.19,0,0,0,17.51,0H4.75c-.06,0-.12,0-.12.06s0,.05,0,.11V.68H1.24A1.25,1.25,0,0,0,0,1.92V27.63a1.25,1.25,0,0,0,1.24,1.24h20.4a1.25,1.25,0,0,0,1.24-1.24h0V3.79ZM4.92.4H17.29V7.12H4.92ZM1.53,15.76l2.09-2.09L1.53,11.58V8.76H5.25l1,1,1-1h3.78v2.82L9,13.67l2.09,2.09v2.83H7.29l-1-1-1,1H1.53ZM21.3,27.35H1.58V23.67H21.3Zm0-4.41H1.58V19.32H21.3Zm0-11.41-2.09,2.09,2.09,2.09v2.82H17.51l-1-1-1,1H11.7V15.71l2.09-2.09L11.7,11.53V8.7h3.78l1,1,1-1H21.3Z" />
        </g>
      </g>
    </svg>
  );
}
