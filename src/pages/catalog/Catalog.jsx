import React from 'react';
import styles from './Catalog.module.css';
import json from '../../db.json';

const Catalog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Каталог доставки:</h2>
      </div>
      <div className={styles.itemsWrapper}>
        {json.catalogItems.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemIcon}>
                <img src={item.iconImg} alt="icon" />
              </div>
              <p>{item.name}</p>
              <div className={styles.itemImg}>
                <img src={item.mainImg} alt="main item" />
              </div>
              <div className={styles.itemHover}>
                <img src={item.hoverImg} alt="hover item" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
