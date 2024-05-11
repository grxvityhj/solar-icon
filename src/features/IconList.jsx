import { useIcons } from '../services/useIcons';

import Loader from '../ui/Loader';
import NoResult from '../ui/NoResult';
import IconItem from './IconItem';

import styles from './IconList.module.css';

function IconList() {
  const { iconList, isLoading } = useIcons();

  if (isLoading) return <Loader />;

  const [{ category_title, icon_list }] = iconList;

  return (
    <section>
      <h2 className={styles.title}>{category_title}</h2>
      <ul className={styles.iconList}>
        {icon_list.length > 0 &&
          icon_list?.map(icon => <IconItem key={icon.label} icon={icon} />)}
        {icon_list.length === 0 && <NoResult />}
      </ul>
    </section>
  );
}

export default IconList;
