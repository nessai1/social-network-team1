import { Plato } from "../../base/Plato";
import styles from "./SitebarMenu.module.scss";
import Link from "next/link";

export const SidebarMenu = () => {
    const platoStyles = {
        marginTop: "20px",
    };

    const userId = 1;

    return (
        <Plato style={platoStyles}>
            <ul className={styles.linksWrapper}>
                <Link href={"/profile/" + userId}>
                    <li className={styles.linkBlock}>Моя страница</li>
                </Link>
                <Link href={"/friends"}>
                    <li className={styles.linkBlock}>Друзья</li>
                </Link>

                <Link href={"/feed"}>
                    <li
                        className={`${styles.linkBlock} ${styles.linkBlock_active}`}
                    >
                        Новости
                    </li>
                </Link>
            </ul>
        </Plato>
    );
};
