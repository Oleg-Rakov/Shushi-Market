import { useDispatch } from 'react-redux';
import { minusValue, plusValue, removeCartItem } from '../../redux/action/cart';
import styles from './Cart.module.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImg}>
        <img src={item.img} alt="cart" />
      </div>
      <div className={styles.cartItemInfo}>
        <div className={styles.cartItemName}>{item.name}</div>
        <div className={styles.cartItemPrice}>
          <div className={styles.priceBlock}>
            <strong>{item.price} </strong>
            <span>грн</span>
          </div>
          <div className={styles.itemValue}>
            <button onClick={() => dispatch(minusValue(item))}>-</button>
            <input type="text" placeholder={item.count} />
            <button onClick={() => dispatch(plusValue(item))}>+</button>
          </div>
        </div>
      </div>
      <div className={styles.itemClose}>
        <span onClick={() => dispatch(removeCartItem(item))}>x</span>
      </div>
    </div>
  );
};

export default CartItem;
