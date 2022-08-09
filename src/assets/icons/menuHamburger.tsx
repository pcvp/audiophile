import { MouseEventHandler } from "react";

interface menuHamburgerProps {
  onClick?: MouseEventHandler<SVGSVGElement> | undefined;
  className?: string;
}

const menuHamburgerIcon = (props: menuHamburgerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      fill="none"
      viewBox="0 0 16 15"
      className={props.className}
      onClick={props.onClick}
    >
      <g fill="#fff">
        <path d="M0 0H16V3H0z"></path>
        <path d="M0 6H16V9H0z"></path>
        <path d="M0 12H16V15H0z"></path>
      </g>
    </svg>
  );
};

export default menuHamburgerIcon;
