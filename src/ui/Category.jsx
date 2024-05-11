import { NavLink, useParams } from 'react-router-dom';

import { useIconCounts } from '../services/useIconCounts';

import styles from './Category.module.css';

function Category() {
  const params = useParams();
  const { iconCounts } = useIconCounts();

  const type = params.type || 'linear';
  const totalCounts = iconCounts?.reduce((acc, cur) => acc + cur.iconCounts, 0);

  return (
    <div className={styles.wrap}>
      <h4 className={styles.title}>Categories</h4>
      <ul className={styles.categoryList}>
        <li key="all">
          <NavLink className={styles.link} to={'/linear/all'}>
            <span className={styles.categoryTitle}>All</span>
            <span className={styles.cnt}>{totalCounts}</span>
          </NavLink>
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
