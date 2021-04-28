import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ cartActive, setcartActive }) => {
  const cartItems = useSelector((state) => state.cart.items);
  let cartSum = useSelector((state) => state.cart.cartSum);
  cartItems.map((item) => (cartSum += +item.price));

  return (
    <div
      className={
        cartActive ? `${styles.cart} ${styles.cartActive}` : `${styles.cart}`
      }
    >
      <div className={styles.cartTitle}>Корзина</div>
      <div onClick={() => setcartActive(false)} className={styles.close}></div>
      <div className={styles.cartContent}>
        {cartItems.map((item) => {
          return <CartItem key={item.name + item.id} item={item} />;
        })}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.cartTotal}>
          <div>Сумма:</div>
          <div>
            <strong>{cartSum} грн</strong>
          </div>
        </div>
        <div className={styles.cartBtn}>
          <button>Оформить</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
