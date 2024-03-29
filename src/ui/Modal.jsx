import styles from './Modal.module.css';

import IconDetail from './IconDetail';
import { useState } from 'react';

function Modal({ onModal }) {
  const [simplify, setSimplify] = useState(false);
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <IconDetail
          simplify={simplify}
          onSimplify={setSimplify}
          onModal={onModal}
        />
      </div>
      <div className={styles.bg} onClick={() => onModal(false)}></div>
    </div>
  );
}

export default Modal;
