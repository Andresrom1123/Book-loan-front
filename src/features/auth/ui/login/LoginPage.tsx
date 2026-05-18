import { LibraryBanner } from '../../../../shared/ui/LibraryBanner/LibraryBanner';

import { LoginForm } from './LoginForm';

import styles from '../AuthPage.module.css';

export function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.splitCard}>
        <LibraryBanner />
        <LoginForm />
      </div>
    </main>
  );
}
