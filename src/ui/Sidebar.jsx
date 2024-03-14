import Category from './Category';
import Logo from './Logo';
import Nav from './Nav';
import styles from './Sidebar.module.css';
import StrokeWidth from './StrokeWidth';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <Nav />
      <StrokeWidth />
      <Category />
    </aside>
  );
}

export default Sidebar;
