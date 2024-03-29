import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      <div className={styles.textCenter}>
        <p className={styles.textLarge}>Loading icons...</p>
        <p className={styles.textNormal}>This might take a while</p>
      </div>
    </div>
  );
}

export default Loader;
