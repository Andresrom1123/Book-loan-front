import { LoginForm } from './LoginForm';

import styles from './LoginPage.module.css';

export function LoginPage() {
  return (
    <main className={styles.page}>
      <LoginForm />
    </main>
  );
}
