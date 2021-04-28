import styles from './Reviews.module.css';
import reviewIcon from '../../assets/images/Reviews/icon.png';

const Reviews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Отзывы
            </div>
            <div style={{ background: 'white' }}>
                <div className={styles.reviewsInfo}>
                    <p>
                        Мы делимся с вами отзывами наших клиентов, которые уже заказали свои блюда в ресторане «Суши Ленд».
                </p>
                    <p>
                        Вы всегда можете оставить свой отзыв, заполнив форму обратной связи с комментарием.
                </p>
                    <p>
                        Сеть магазинов японской кухни «Суши Ленд» всегда заинтересован в улучшении работы, по этому ваши отзывы для нас бесценны!!!
                </p>
                </div>
                <div className={styles.form}>
                    <div className={styles.formTitle}>
                        Комментировать
                </div>
                    <div className={styles.formItems}>
                        <textarea placeholder='Ваш отзыв*' name=""></textarea>
                        <input placeholder='Ваше имя*' type="text" />
                        <input placeholder='Email адрес*' type="text" />
                        <div className={styles.formBtn}>
                            <button >Оставить отзыв</button>
                        </div>
                    </div>
                    <div className={styles.commentsBlock}>
                        <div className={styles.commentImg}>
                            <img src={reviewIcon} alt='user icon' />
                        </div>
                        <div className={styles.commentInfo}>
                            <p className={styles.commentName}>ИГОРЬ</p>
                            <p className={styles.commentDate}>10.08.2018</p>
                            <p className={styles.commentDesc}>Заказывали сет Калифорния, к футболу. Доставка была во время, к-во роллов приятно удивило. Вкус отменный, в дальнейшем буду заказывать только тут!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;