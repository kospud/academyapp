import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 33"
    {...props}
  >
    <circle cx={15.5} cy={7.813} r={7.813} fill="currentColor" />
    <path
      fill="currentColor"
      d="M3 18.33c0-.63.512-1.142 1.143-1.142h22.714c.631 0 1.143.511 1.143 1.142v5.696c0 1.637-.578 3.239-1.869 4.246-2.054 1.605-5.727 3.76-10.631 3.76s-8.577-2.155-10.632-3.76C3.578 27.265 3 25.662 3 24.026z"
    />
  </svg>
);
export default SvgUser;
