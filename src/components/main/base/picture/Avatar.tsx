import {TAvatar} from "./TAvatar";
import styles from "./Avatar.module.scss";

export function Avatar(avatarParams: TAvatar) {

    const avatarStyle = {
        background: 'no-repeat center center',
        backgroundSize: 'cover',
        backgroundImage: 'url('+ avatarParams.src +')',
    };

    return (
        <div className={styles.avatar} style={avatarStyle}></div>
    );
}