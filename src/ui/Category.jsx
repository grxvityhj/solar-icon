import { NavLink, useParams } from 'react-router-dom';

import { useIconCounts } from '../services/useIconCounts';

import styles from './Category.module.css';

function Category() {
  const params = useParams();
  const { iconCounts } = useIconCounts();

  const type = params.type || 'linear';

  return (
    <div className={styles.wrap}>
      <h4 className={styles.title}>Categories</h4>
      <ul className={styles.categoryList}>
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
