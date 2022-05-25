import styles from "./Contentbar.module.scss";
import { HeaderContent } from "./HeaderContent";

export const Contentbar = () => {
    return (
        <div className={styles.userContent}>
            <HeaderContent />
        </div>
    );
};
