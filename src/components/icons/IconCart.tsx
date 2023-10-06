import { SVGProps } from 'react';

export default function IconCart(props: SVGProps<SVGSVGElement>) {
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
        d="M8.484 19.937a1.406 1.406 0 1 0 0-2.812 1.406 1.406 0 0 0 0 2.812ZM18.328 19.937a1.406 1.406 0 1 0 0-2.812 1.406 1.406 0 0 0 0 2.812ZM20.824 5.558a1.051 1.051 0 0 0-.815-.386H6.634l-.27-1.528a.703.703 0 0 0-.692-.581H2.859a.703.703 0 0 0 0 1.406h2.223L7.09 15.841a.703.703 0 0 0 .692.581h11.25a.703.703 0 1 0 0-1.406H8.371l-.248-1.406h10.62a1.057 1.057 0 0 0 1.035-.848l1.266-6.328a1.055 1.055 0 0 0-.22-.876Z"
      />
    </svg>
  );
}
