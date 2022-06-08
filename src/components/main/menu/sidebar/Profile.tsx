import { Plato } from "../../base/Plato";
import styles from "./Profile.module.scss";
import { Avatar } from "../../base/picture/Avatar";
import { useSession } from "next-auth/react";

type TProps = {
    name: string;
    userId: string;
    avatarUrl: string;
};

export const Profile = (userInfo: TProps) => {
    return (
        <Plato>
            <div className={styles.profile}>
                <Avatar size={50} src={'https://get.wallhere.com/photo/landscape-sea-reflection-bridge-suspension-bridge-1680x1050-px-nonbuilding-structure-cable-stayed-bridge-truss-bridge-706446.jpg'} />
                <div className={styles.userInfo}>
                    <span className={`${styles.text} ${styles.textName}`}>
                        мужик
                    </span>
                    <span className={`${styles.text} ${styles.textLink}`}>
                        123
                    </span>
                </div>
            </div>
        </Plato>
    );
};
