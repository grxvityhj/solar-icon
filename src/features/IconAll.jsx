import IconItem from './IconItem';
import Loader from '../ui/Loader';

import { useAllIcons } from '../services/useAllIcons';
import { randomID } from '../utils/helper';

import styles from './IconAll.module.css';

function IconAll() {
  const { iconsList, isLoading } = useAllIcons();

  if (isLoading) return <Loader />;

  return (
    <>
      {iconsList?.map(li => (
        <section key={li.category || randomID()} className={styles.section}>
          <h2 className={styles.title}>{li.category_title}</h2>
          <ul className={styles.iconList}>
            {li.icon_list?.map(icon => (
              <IconItem
                key={icon.label ? icon.label : li.category_title}
                icon={icon}
              />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

export default IconAll;
