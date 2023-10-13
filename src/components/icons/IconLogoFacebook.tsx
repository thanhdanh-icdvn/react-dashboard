import { SVGProps } from 'react';

export default function IconLogoFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M28.416 16c0-7.13-5.786-12.917-12.916-12.917C8.37 3.083 2.583 8.87 2.583 16c0 6.252 4.443 11.457 10.333 12.658v-8.783h-2.583V16h2.583v-3.23a4.526 4.526 0 0 1 4.521-4.52h3.23v3.875h-2.584c-.71 0-1.292.581-1.292 1.292V16h3.875v3.875h-3.875v8.977c6.523-.646 11.625-6.148 11.625-12.852Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 .5h31v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
