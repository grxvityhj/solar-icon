import { Link, NavLink, useParams } from 'react-router-dom';

import { useIconCounts } from '../services/useIconCounts';
import { useAllIconCounts } from '../services/useAllIconCounts';
import { BASE_URL } from '../utils/constant';

import styles from './Category.module.css';

function Category() {
  const params = useParams();
  const { iconCounts } = useIconCounts();
  const { allCounts } = useAllIconCounts();

  const type = params.type || 'linear';
  const category = params.category || '';

  return (
    <div className={styles.wrap}>
      <h4 className={styles.title}>Categories</h4>
      <ul className={styles.categoryList}>
        <li key="all">
          <Link
            className={`${styles.link} ${!category ? 'active' : ''}`}
            to={`/${type}`}
          >
            <span className={styles.categoryTitle}>All</span>
            <span className={styles.cnt}>{allCounts}</span>
          </Link>
        </li>
        {iconCounts?.map(li => (
          <li key={li.category}>
            <NavLink className={styles.link} to={`/${type}/${li.category}`}>
              <span className={styles.categoryTitle}>{li.category_title}</span>
              <span className={styles.cnt}>{li.iconCounts}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
