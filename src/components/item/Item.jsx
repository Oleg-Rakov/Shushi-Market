import React from 'react';
import { useParams } from 'react-router';
import styles from './Item.module.css';
import deliveryIcon from '../../assets/images/delivery.png';
import { useDispatch } from 'react-redux';
import { addPopularItem } from '../../redux/action/cart';
import json from '../../db.json';

const Item = () => {
  const { id } = useParams();
  const item = json.popularItems.find((item) => +id === item.id);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{item.name}</span>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.itemImg}>
          <img src={item.img} alt="item" />
        </div>
        <div className={styles.item}>
          <h3>{item.name}</h3>
          <span>{item.value} шт.,</span>
          <span>{item.gram} г</span>
          <p>{item.desc}</p>
          <div className={styles.itemInfo}>
            <div className={styles.priceBlock}>
              <strong>{item.price} </strong>
              <span>грн</span>
            </div>
            <div className={styles.itemValue}>
              <button>-</button>
              <input type="text" placeholder={item.count} />
              <button>+</button>
            </div>
          </div>
          <button
            onClick={() => dispatch(addPopularItem(item))}
            className={styles.itemBtn}
          >
            В корзину
          </button>
          <div className={styles.itemDelivery}>
            <img src={deliveryIcon} alt="delivery item" />
            <a href="/">Условия бесплатной доставки</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
