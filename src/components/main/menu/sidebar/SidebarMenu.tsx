import {Plato} from "../../base/Plato";
import styles from "./SitebarMenu.module.scss"

export const SidebarMenu = () => {

    const platoStyles = {
        marginTop: '20px',
    }

    return (
        <Plato style={platoStyles}>
            <ul className={styles.linksWrapper}>
                <li className={styles.linkBlock}>Моя страница</li>
                <li className={styles.linkBlock}>Друзья</li>
                <li className={`${styles.linkBlock} ${styles.linkBlock_active}`}>Новости</li>
                <li className={styles.linkBlock}>Настройки</li>
            </ul>
        </Plato>
    );
}