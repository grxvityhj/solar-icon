import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoWrap}>
      <Link to="/" className={styles.logo}>
        <h2 className={styles.title}>
          <span>S</span>olar Icon
        </h2>
      </Link>
      <a
        className={styles.copyright}
        href="https://github.com/480-Design/Solar-Icon-Set"
        target="_blank"
      >
        &copy; 480 Design
      </a>
    </div>
  );
}

export default Logo;
