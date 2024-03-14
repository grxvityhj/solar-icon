import Circle from '../icons/Circle';
import NavLinkItem from './NavLinkItem';

import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <h3 className={styles.title}>Type</h3>
        <ul className={styles.navList}>
          <li>
            <NavLinkItem
              to="/linear"
              label="Linear"
              icon={<Circle size="16" />}
            />
          </li>
          <li>
            <NavLinkItem
              to="/duotone"
              label="Duotone"
              icon={<Circle size="16" type="duotone" />}
            />
          </li>
          <li>
            <NavLinkItem
              to="/bold"
              label="Bold"
              icon={<Circle size="16" type="bold" />}
            />
          </li>
          <li>
            <NavLinkItem
              to="/bulk"
              label="Bulk"
              icon={<Circle size="16" type="bulk" />}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
