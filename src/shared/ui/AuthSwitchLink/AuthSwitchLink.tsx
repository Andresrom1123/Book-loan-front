import { Link } from 'react-router-dom';

import styles from './AuthSwitchLink.module.css';

interface AuthSwitchLinkProps {
  text:      string;
  linkLabel: string;
  to:        string;
}

export function AuthSwitchLink({ text, linkLabel, to }: AuthSwitchLinkProps) {
  return (
    <p className={styles.text}>
      {text} <Link className={styles.link} to={to}>{linkLabel}</Link>
    </p>
  );
}
