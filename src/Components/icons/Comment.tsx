import * as React from "react";
import type { SVGProps } from "react";
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.313 0a1 1 0 0 0-1 1v21.044l2.154-3.555h21.46a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M30.158 28.445H8.698a1 1 0 0 1-1-1v-6.533a1 1 0 0 1 1-1h16.46a1 1 0 0 0 1-1v-7.956a1 1 0 0 1 1-1h4.154a1 1 0 0 1 1 1V32z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComment;
