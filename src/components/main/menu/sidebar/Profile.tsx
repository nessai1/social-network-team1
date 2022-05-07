import {Plato} from "../../base/Plato";
import styles from "./Profile.module.scss";
import {Avatar} from "../../base/picture/Avatar";

type TProps = {
    name: string,
    userId: string,
    avatarUrl: string,
}

export const Profile = (userInfo: TProps) => {
    return (
        <Plato>
            <div className={styles.profile}>
                <Avatar size={50} src={userInfo.avatarUrl}/>
                <div className={styles.userInfo}>
                    <span className={`${styles.text} ${styles.textName}`}>{userInfo.name}</span>
                    <span className={`${styles.text} ${styles.textLink}`}>@{userInfo.userId}</span>
                </div>
            </div>
        </Plato>
    );
}
