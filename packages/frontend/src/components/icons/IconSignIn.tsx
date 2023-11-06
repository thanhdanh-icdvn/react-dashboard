import { SVGProps } from 'react';

export default function IconSignIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.04 7.063H8.937A1.406 1.406 0 0 1 7.53 5.656V1.555a.117.117 0 0 0-.117-.117H4.72a1.875 1.875 0 0 0-1.875 1.875v9.375a1.875 1.875 0 0 0 1.875 1.875h6.562a1.875 1.875 0 0 0 1.875-1.875V7.18a.117.117 0 0 0-.117-.117Z"
      />
      <path
        fill="currentColor"
        d="M12.782 6.026 8.569 1.813a.059.059 0 0 0-.1.041v3.803a.469.469 0 0 0 .469.469h3.803a.059.059 0 0 0 .057-.07.059.059 0 0 0-.016-.03Z"
      />
    </svg>
  );
}
