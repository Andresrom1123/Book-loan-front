import style from './Category.module.css';

interface Props {
  name:    string;
  color:   string;
  active?: boolean;
  count?:  number;
  onClick?: () => void;
}

export default function Category({
  name, color, active = false, count, onClick
}: Props) {
  return (
    <span
      className={`${style.category} ${active ? style.active : ''}`}
      style={{ '--cat-color': color } as React.CSSProperties}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <span className={style.catDot} />

      {name}
      {count !== undefined && (
        <span className={style.catCount}>{count}</span>
      )}
    </span>
  );
}
