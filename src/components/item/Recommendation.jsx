import styles from './Recommendation.module.css';
import json from '../../db.json';

const Recommendation = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Мы рекомендуем</div>
      <div className={styles.items}>
        {json.recommendationItems.map((item) => {
          return (
            <div className={styles.item} key={item.id}>
              <div
                className={styles.popularImg}
                style={{ textAlign: 'center' }}
              >
                <img src={item.img} alt="sushi item" />
              </div>
              <p className={styles.itemName}>{item.name}</p>
              <span className={styles.itemValue}>{item.value} шт., </span>
              <span className={styles.itemValue}>{item.gram} г</span>
              <p className={styles.itemDesc}>{item.desc}</p>
              <div className={styles.info}>
                <span className={styles.infoPrice}>
                  <b>{item.price}</b> грн
                </span>
                <button className={styles.infoBtn}>В корзину</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendation;
