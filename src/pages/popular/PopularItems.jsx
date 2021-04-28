import React from 'react';
import { useDispatch } from 'react-redux';
import { addPopularItem } from '../../redux/action/cart';
import styles from './Popular.module.css';
import { NotificationManager } from 'react-notifications';

const PopularItems = ({ item, history }) => {
  const dispatch = useDispatch();
  return (
    <div key={item.id} className={styles.popularItem}>
      <div className={styles.popularImg} style={{ textAlign: 'center' }}>
        <img
          onClick={() => history.push('/item/' + item.id)}
          src={item.img}
          alt="popular item"
        />
      </div>
      <p className={styles.itemName}>{item.name}</p>
      <span className={styles.itemValue}>{item.value} шт., </span>
      <span className={styles.itemValue}>{item.gram} г</span>
      <p className={styles.itemDesc}>{item.desc}</p>
      <div className={styles.info}>
        <span className={styles.infoPrice}>
          <b>{item.price}</b> грн
        </span>
        <button
          onClick={() => {
            dispatch(addPopularItem(item, item.price));
            NotificationManager.success('Товар успешно добавлен в корзину');
          }}
          className={styles.infoBtn}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default PopularItems;
