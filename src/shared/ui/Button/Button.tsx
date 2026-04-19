import { type ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ loading, variant = 'primary', size = 'md', children, disabled, ...props }: ButtonProps) {
  const sizeClass = styles[size];
  const variantClass = variant === 'outline' ? styles.outline : styles.primary;

  return (
    <button
      className={`${variantClass} ${sizeClass}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
