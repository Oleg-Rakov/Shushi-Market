import Popular from './popular/Popular';
import Catalog from './catalog/Catalog';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.popularTitle}>
        <h1>Самые популярные:</h1>
      </div>
      <Popular />
      <Catalog />
    </div>
  );
};

export default MainPage;
