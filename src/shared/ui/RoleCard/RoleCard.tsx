import { IconAdmin } from '../icons/IconAdmin';
import { IconStudent } from '../icons/IconStudent';

import styles from './RoleCard.module.css';

type RoleId = 'student' | 'admin';

interface Props {
  id:       RoleId;
  name:     string;
  desc:     string;
  selected: boolean;
  onClick:  () => void;
}

export function RoleCard({ id, name, desc, selected, onClick }: Props) {
  return (
    <button
      type="button"
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <span className={styles.icon}>
        {id === 'student' ? <IconStudent /> : <IconAdmin />}
      </span>
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </button>
  );
}
