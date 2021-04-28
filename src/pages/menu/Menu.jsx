import styles from './Menu.module.css';
import Recommendation from '../../components/item/Recommendation';
import json from '../../db.json';

const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Меню
            </div>
            <div className={styles.itemsWrapper}>
            {json.catalogItems.map(item => {
                    return <div key={item.id} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <img src={item.iconImg} alt='icon'/>
                        </div>
                        <p>{item.name}</p>
                        <div className={styles.itemImg}>
                            <img src={item.mainImg} alt='main item'/>
                        </div>
                        <div className={styles.itemHover}>
                            <img src={item.hoverImg} alt='hover item'/>
                        </div>
                    </div>
                })}
               
            </div>
            <Recommendation />
        </div>
    )
}


export default Menu;