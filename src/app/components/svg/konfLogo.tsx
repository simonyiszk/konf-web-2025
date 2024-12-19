import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 22.88 28.9"
    width="1em"
    height="1em"
    {...props}
  >
    <defs></defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1-2">
        <path d="M13.73.79V6.5h2.94V.79Zm0 0V6.5h2.94V.79Z" className="cls-1" />
        <path
          d="M20 .68h-2.32V.17c0-.06 0-.11-.05-.11a.19.19 0 0 0-.12-.06H4.75c-.06 0-.12 0-.12.06v.62H1.24A1.25 1.25 0 0 0 0 1.92v25.71a1.25 1.25 0 0 0 1.24 1.24h20.4a1.25 1.25 0 0 0 1.24-1.24V3.79ZM4.92.4h12.37v6.72H4.92ZM1.53 15.76l2.09-2.09-2.09-2.09V8.76h3.72l1 1 1-1h3.78v2.82L9 13.67l2.09 2.09v2.83h-3.8l-1-1-1 1H1.53ZM21.3 27.35H1.58v-3.68H21.3Zm0-4.41H1.58v-3.62H21.3Zm0-11.41-2.09 2.09 2.09 2.09v2.82h-3.79l-1-1-1 1H11.7v-2.82l2.09-2.09-2.09-2.09V8.7h3.78l1 1 1-1h3.82Z"
          className="cls-1"
        />
      </g>
    </g>
  </svg>
);
export default SvgComponent;
