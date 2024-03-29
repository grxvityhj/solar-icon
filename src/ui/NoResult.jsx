import Sad from '../icons/Sad';
import styles from './NoResult.module.css';

function NoResult() {
  return (
    <div className={styles.container}>
      <Sad size="140" />
      <p>No results found</p>
    </div>
  );
}

export default NoResult;
