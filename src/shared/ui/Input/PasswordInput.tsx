import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';

import styles from './PasswordInput.module.css';

enum PasswordStrength {
  Empty  = 0,
  Weak   = 1,
  Fair   = 2,
  Good   = 3,
  Strong = 4,
}

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string;
}

const STRENGTH_LABELS: Record<PasswordStrength, string> = {
  [PasswordStrength.Empty]:  '',
  [PasswordStrength.Weak]:   'Débil',
  [PasswordStrength.Fair]:   'Regular',
  [PasswordStrength.Good]:   'Buena',
  [PasswordStrength.Strong]: 'Fuerte',
};

const REQUIREMENTS = [
  { test: (value: string) => value.length >= 8,           label: 'Mínimo 8 caracteres' },
  { test: (value: string) => /[A-Z]/.test(value),         label: 'Una letra mayúscula' },
  { test: (value: string) => /[0-9]/.test(value),         label: 'Un número' },
  { test: (value: string) => /[^A-Za-z0-9]/.test(value),  label: 'Un carácter especial (!@#$...)' },
];

function getStrength(value: string): PasswordStrength {
  if (!value) {
    return PasswordStrength.Empty;
  }

  let score = 0;

  if (value.length >= 8) {
    score++;
  }

  if (/[A-Z]/.test(value)) {
    score++;
  }

  if (/[0-9]/.test(value)) {
    score++;
  }

  if (/[^A-Za-z0-9]/.test(value)) {
    score++;
  }

  return score as PasswordStrength;
}

export function PasswordInput({ value, ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const strength = getStrength(value);

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <input
          className={styles.input}
          type={show ? 'text' : 'password'}
          value={value}
          {...props}
        />
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setShow(s => !s)}
        >
          {show ? 'ocultar' : 'mostrar'}
        </button>
      </div>

      {value.length > 0 && (
        <div className={styles.strength}>
          <div className={styles.bars}>
            {([PasswordStrength.Weak, PasswordStrength.Fair, PasswordStrength.Good, PasswordStrength.Strong]).map(level => (
              <div
                key={level}
                className={`${styles.bar} ${strength >= level ? styles[`s${strength}`] : ''}`}
              />
            ))}
          </div>
          <span className={styles.label}>{STRENGTH_LABELS[strength]}</span>
        </div>
      )}

      {value.length > 0 && strength < PasswordStrength.Strong && (
        <ul className={styles.hints}>
          {REQUIREMENTS.map(req => (
            <li
              key={req.label}
              className={req.test(value) ? styles.hintMet : styles.hintPending}
            >
              {req.test(value) ? '✓' : '○'} {req.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
