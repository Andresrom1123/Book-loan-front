import { useState } from 'react';

import { Button } from '../../../shared/ui/Button/Button';

import styles from './LoginForm.module.css';

import { useLogin } from './hooks/useLogin';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await login({ email, password });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login</h2>

      <input
        className={styles.input}
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className={styles.input}
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className={styles.error}>{error}</p>}

      <Button type="submit" loading={loading}>
        Login
      </Button>
    </form>
  );
}
