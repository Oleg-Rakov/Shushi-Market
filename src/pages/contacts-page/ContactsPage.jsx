import { NavLink } from 'react-router-dom';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Контакты</div>
      <div className={styles.contactsBlock}>
        <div className={styles.contactsItems}>
          <div className={styles.contactsItem}>
            <p>КИЕВ ул. С. Стрельцов, 57</p>
            <span>
              <NavLink to="/">(093) 927-27-25</NavLink>
            </span>
            <span>
              <NavLink to="/">(066) 100-22-75</NavLink>
            </span>
            <span>
              <NavLink to="/">(098) 31-30-881</NavLink>
            </span>
          </div>
          <div className={styles.contactsBorder}></div>
          <div className={styles.contactsItem}>
            <p>КИЕВ ул. А.Малышко, 2а</p>
            <span>
              <NavLink to="/">(093) 198-09-50</NavLink>
            </span>
            <span>
              <NavLink to="/">(066) 091-86-05</NavLink>
            </span>
            <span>
              <NavLink to="/">(098) 005-30-80</NavLink>
            </span>
          </div>
        </div>
        <div className={styles.contactsMap}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10159.514589462911!2d30.493048292402772!3d50.461984421629715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce638c6b0d5d%3A0xbaa103130d072578!2z0KHRg9GI0Lgg0JvQtdC90LQ!5e0!3m2!1sru!2sua!4v1618750536155!5m2!1sru!2sua"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
