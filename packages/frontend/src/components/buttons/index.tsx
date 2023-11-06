import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import buttonStyles from './button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  full?: boolean;
  size?: 'sm' | 'md' | 'lg';
  primary?: boolean;
  variant?: 'outline' | 'solid' | 'ghost';
};
export default function Button(props: ButtonProps) {
  const { className, children, size, full, ...otherProps } = props;

  return (
    <button
      className={clsx(
        buttonStyles.button,
        {
          [buttonStyles.full]: full,
          [buttonStyles.sm]: size === 'sm',
          [buttonStyles.lg]: size === 'lg',
        },
        [className],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
