import { useState } from 'react';
import styles from './Vacancy.module.css';

const VacancyItem = ({ item }) => {
  const [showAtributes, setShowAtributes] = useState(false);
  return (
    <div className={styles.openVacancy} key={item.id}>
      <div className={styles.vacancyTitle}>
        <strong>{item.nameVacancy}</strong>
      </div>
      <div
        className={
          showAtributes ? styles.vacancyActive : styles.vacancyAtributes
        }
      >
        <p>{item.p1}</p>
        <p>{item.p2}</p>
        <p>{item.p3}</p>
        <p>{item.p4}</p>
      </div>
      <button
        onClick={() => setShowAtributes(prev => !prev)}
        className={styles.vacancyBtn}
      ></button>
    </div>
  );
};

export default VacancyItem;
