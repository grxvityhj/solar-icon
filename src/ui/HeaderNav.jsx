import styles from './HeaderNav.module.css';

function HeaderNav() {
  return (
    <nav>
      <ul>
        <li>
          <a
            className={styles.link}
            href="https://github.com/grxvityhj/solar-icon"
            target="_blank"
          >
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
