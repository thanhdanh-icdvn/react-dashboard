import { SVGProps } from 'react';

export default function IconDocument(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={23}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.023}
        d="M13.406 10.106h6.153a.164.164 0 0 1 .164.164v8.262a2.8 2.8 0 0 1-2.801 2.8H7.078a2.8 2.8 0 0 1-2.8-2.8V4.469a2.8 2.8 0 0 1 2.8-2.8h4.043a.164.164 0 0 1 .164.163v6.153a2.121 2.121 0 0 0 2.121 2.12Zm-4.922 7.031h7.032a.715.715 0 0 0 0-1.43H8.484a.715.715 0 0 0 0 1.43Zm0-3.516h7.032a.715.715 0 0 0 0-1.43H8.484a.715.715 0 0 0 0 1.43Z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.023}
        d="m12.845 2.228 6.32 6.32-6.32-6.32Zm0 0a.076.076 0 0 0-.13.053v5.705a.691.691 0 0 0 .691.691h5.705a.076.076 0 0 0 .053-.13l-6.32-6.32Z"
      />
    </svg>
  );
}
