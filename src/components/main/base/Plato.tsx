import {ReactNode} from "react";
import styles from './Plato.module.scss';

type TProps = {
    children: ReactNode,
}

export const Plato = (props : TProps) => {
    return (
        <div className={styles.plato}>
            {props.children}
        </div>
    )
}