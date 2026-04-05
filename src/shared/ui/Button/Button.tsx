import { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'outline';
}

export function Button({ loading, variant = 'primary', children, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={variant === 'outline' ? styles.outline : styles.primary}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
