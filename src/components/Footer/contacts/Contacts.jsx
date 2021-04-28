import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2>КИЕВ ул. С. Стрельцов, 57</h2>
                <span><NavLink to='/'>(093) 927-27-25</NavLink></span>
                <span><NavLink to='/'>(066) 100-22-75</NavLink></span>
                <span><NavLink to='/'>(098) 31-30-881</NavLink></span>
            </div>
            <div className={styles.item}>
                <h2>КИЕВ ул. А.Малышко, 2а</h2>
                <span><NavLink to='/'>(093) 198-09-50</NavLink></span>
                <span><NavLink to='/'>(066) 091-86-05</NavLink></span>
                <span><NavLink to='/'>(098) 005-30-80</NavLink></span>
            </div>
        </div>
    )
}

export default Contacts;