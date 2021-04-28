import React from 'react';
import styles from './FooterNavBar.module.css';
import fbIcon from '../../assets/images/fb-icon.png';
import vkIcon from '../../assets/images/vk-icon.png';
import logo from '../../assets/images/header-logo.png'
import { NavLink } from 'react-router-dom';

const FooterNavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerLogo}>
                <NavLink to='/'><img src={logo} alt='logo' /></NavLink>
            </div>
            <nav className={styles.navBar}>
                <NavLink to='/about'>О нас</NavLink>
                <NavLink to='/menu'>Меню</NavLink>
                <NavLink to='/delivery'>Доставка</NavLink>
                <NavLink to='/vacancy'>Вакансии</NavLink>
                <NavLink to='/reviews'>Отзывы</NavLink>
                <NavLink to='/promotions'>Акции</NavLink>
                <NavLink to='/contacts'>Контакты</NavLink>
            </nav>
            <div className={styles.socialBlock}>
                <div className={styles.socialItem}>
                    <NavLink to='/'><img src={fbIcon} alt='facebook'/></NavLink>
                </div>
                <div className={styles.socialItem}>
                    <NavLink to='/'><img src={vkIcon} alt='vkontakte'/></NavLink>
                </div>
            </div>
        </div>
    )
}

export default FooterNavBar;