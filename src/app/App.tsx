import { LoginPage } from '../features/auth/ui/LoginPage';
import { Header } from '../shared/ui/Header/Header';
import { useTheme } from '../shared/hooks/useTheme';

import styles from './App.module.css';

export function App() {
  const { dark, toggle } = useTheme();

  return (
    <div className={styles.layout}>
      <Header dark={dark} onToggle={toggle} />
      <LoginPage />
    </div>
  );
}
