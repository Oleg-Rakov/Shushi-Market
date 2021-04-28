import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/header-logo.png';
import { NavLink } from 'react-router-dom';
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';

const Header = () => {
  const [cartActive, setcartActive] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  let cartSum = useSelector((state) => state.cart.cartSum);
  cartItems.map((item) => (cartSum += +item.price));

  return (
    <div className={styles.container}>
      <div className={styles.headerInner}>
        <div className={styles.headerLogo}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className={styles.navBar}>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/menu">Меню</NavLink>
          <NavLink to="/delivery">Доставка</NavLink>
          <NavLink to="/vacancy">Вакансии</NavLink>
          <NavLink to="/reviews">Отзывы</NavLink>
          <NavLink to="/promotions">Акции</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>
        <div className={styles.infoBlock}>
          <div className={styles.infoBlockBtn}>
            <a href="/">Обратный звонок</a>
          </div>
          <div className={styles.infoPrice}>
            <span>
              <strong>{cartSum}</strong> грн
            </span>
            <div
              onClick={() => setcartActive(true)}
              className={styles.right}
            ></div>
          </div>
        </div>
        <Cart cartActive={cartActive} setcartActive={setcartActive} />
      </div>
    </div>
  );
};

export default Header;
