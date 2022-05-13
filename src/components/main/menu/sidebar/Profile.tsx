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
    const { data: session, status } = useSession();
    console.log(session, status);
    return (
        <Plato>
            <div className={styles.profile}>
                <Avatar size={50} src={session?.user?.image} />
                <div className={styles.userInfo}>
                    <span className={`${styles.text} ${styles.textName}`}>
                        {session?.user?.name}
                    </span>
                    <span className={`${styles.text} ${styles.textLink}`}>
                        @{userInfo.userId}
                    </span>
                </div>
            </div>
        </Plato>
    );
};
