import { SVGProps } from 'react';

export default function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="m14.13 13.096-2.757-2.757a5.091 5.091 0 0 0 1.02-3.064 5.125 5.125 0 0 0-5.118-5.118 5.125 5.125 0 0 0-5.119 5.118 5.125 5.125 0 0 0 5.119 5.12 5.093 5.093 0 0 0 3.064-1.021l2.756 2.756a.733.733 0 0 0 1.035-1.034ZM3.619 7.276a3.656 3.656 0 1 1 7.312 0 3.656 3.656 0 0 1-7.312 0Z"
      />
    </svg>
  );
}
