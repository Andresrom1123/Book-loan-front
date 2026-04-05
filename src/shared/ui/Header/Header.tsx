import { Button } from '../Button/Button';
import styles from './Header.module.css';

interface HeaderProps {
  dark: boolean;
  onToggle: () => void;
}

export function Header({ dark, onToggle }: HeaderProps) {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>BookLoan</span>

      <Button variant="outline" onClick={onToggle}>
        {dark ? 'Light' : 'Dark'}
      </Button>
    </header>
  );
}
