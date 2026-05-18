import { LibraryBanner } from '../../../../shared/ui/LibraryBanner/LibraryBanner';

import { RegisterForm } from './RegisterForm';

import styles from '../AuthPage.module.css';

export function RegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.splitCard}>
        <LibraryBanner />
        <RegisterForm />
      </div>
    </main>
  );
}
