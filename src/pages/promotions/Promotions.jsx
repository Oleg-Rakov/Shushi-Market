import styles from './Promotions.module.css';
import promovideo from '../../assets/images/Promotions/promotions.webm';

const Promotions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Акции
            </div>
            <div className={styles.promoBlock}>
                <video autoPlay={true} muted>
                    <source src={promovideo} type='video/webm' />
                </video>
            </div>
        </div>
    )
}

export default Promotions;