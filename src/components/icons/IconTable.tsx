import { SVGProps } from "react";

export default function IconTable(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M3.547 15.032h-.938a.703.703 0 0 1-.703-.704V10.11a.703.703 0 0 1 .703-.703h.938a.703.703 0 0 1 .703.703v4.219a.703.703 0 0 1-.703.703ZM10.11 15.03h-.938a.703.703 0 0 1-.703-.702V7.296a.703.703 0 0 1 .703-.703h.937a.703.703 0 0 1 .704.703v7.032a.703.703 0 0 1-.704.703ZM13.39 15.031h-.937a.703.703 0 0 1-.703-.703V4.015a.703.703 0 0 1 .703-.703h.938a.703.703 0 0 1 .703.704v10.312a.703.703 0 0 1-.703.703ZM6.828 15.031h-.937a.703.703 0 0 1-.704-.703V1.672a.703.703 0 0 1 .704-.703h.937a.703.703 0 0 1 .703.703v12.656a.703.703 0 0 1-.703.703Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5.5h15v15H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}
