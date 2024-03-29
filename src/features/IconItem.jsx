import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import Modal from '../ui/Modal';

import styles from './IconItem.module.css';

function IconItem({ icon }) {
  const { svg, label, keyword } = icon;

  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [modal, setModal] = useState(false);

  const type = params.type || 'linear';

  function handleItem() {
    searchParams.set('type', type);
    searchParams.set('icon', label);
    setSearchParams(searchParams);
    setModal(true);
  }

  return (
    <>
      <li className={styles.item} onClick={handleItem}>
        <div
          className={styles.svg}
          dangerouslySetInnerHTML={{ __html: svg }}
        ></div>
        <p className={styles.label}>{label}</p>
      </li>
      {modal && <Modal onModal={setModal} />}
    </>
  );
}

export default IconItem;
