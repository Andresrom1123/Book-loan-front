import styles from './LibraryBanner.module.css';

export function LibraryBanner() {
  return (
    <aside className={styles.banner}>
      <div>
        <h2 className={styles.title}>
          Una<br />biblioteca<br />completa.
        </h2>
        <p className={styles.text}>
          939 libros disponibles. Préstamos rápidos. Categorías para todos los gustos.
        </p>
      </div>

      <svg width="120" height="80" viewBox="0 0 120 80" className={styles.decor}>
        <rect x="10" y="20" width="22" height="55" fill="#3b5bdb" rx="2" />
        <rect x="34" y="15" width="22" height="60" fill="#c2255c" rx="2" />
        <rect x="58" y="25" width="22" height="50" fill="#e67700" rx="2" />
        <rect x="82" y="10" width="22" height="65" fill="#2f9e44" rx="2" />
      </svg>

      <div className={styles.foot}>v1.0 · biblioteca</div>
    </aside>
  );
}
