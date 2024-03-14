import { NavLink, useParams } from 'react-router-dom';

import styles from './NavLinkItem.module.css';
import { BASE_URL } from '../utils/constant';

function NavLinkItem({ to, label, icon }) {
  const params = useParams();
  const category = params.category || '';

  return (
    <NavLink
      className={styles.link}
      to={`${to}${category ? `/${category}` : ''}`}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

export default NavLinkItem;
