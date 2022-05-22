import styles from "./SidebarLink.module.scss";
import { Plato } from "../../base/Plato";
import Link from "next/link";

type TProps = {
    isActive: boolean;
    name: string;
};

export const SidebarLink = (props: TProps) => {
    if (props.isActive) {
        return (
            <li className={`${styles.linkBlock} ${styles.linkBlock_active}`}>
                {props.name}
            </li>
        );
    } else {
        return <li className={styles.linkBlock}>{props.name}</li>;
    }
};
