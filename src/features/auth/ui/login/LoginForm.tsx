import { useState } from 'react';

import { AuthSwitchLink } from '../../../../shared/ui/AuthSwitchLink/AuthSwitchLink';
import { Button } from '../../../../shared/ui/Button/Button';
import { Input } from '../../../../shared/ui/Input/Input';

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
      <h2 className={styles.title}>Iniciar Sesión</h2>

      <Input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className={styles.error}>{error}</p>}

      <Button type="submit" loading={loading}>
        Iniciar Sesión
      </Button>

      <AuthSwitchLink text="¿No tienes cuenta?" linkLabel="Crear una" to="/register" />
    </form>
  );
}
