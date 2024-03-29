import styles from './Header.module.css';
import HeaderNav from './HeaderNav';
import Search from './Search';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Search />
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
