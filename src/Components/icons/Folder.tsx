import * as React from "react";
import type { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 32"
    {...props}
  >
    <rect
      width={32}
      height={20.8}
      x={0.082}
      y={11.2}
      fill="currentColor"
      rx={1}
    />
    <path
      fill="currentColor"
      d="M28.682 5.6h-25.2a1 1 0 0 0-1 1v3h27.2v-3a1 1 0 0 0-1-1M26.283 0h-20.4a1 1 0 0 0-1 1v3h22.4V1a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgFolder;
