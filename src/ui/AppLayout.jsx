import { Outlet } from 'react-router-dom';

import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';

import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default AppLayout;
