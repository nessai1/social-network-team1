import {ReactNode} from "react";
import styles from './Plato.module.scss';

type TProps = {
    children: ReactNode,
    style?: Object,
}

export const Plato = (props : TProps) => {

    return (
        <div style={props.style} className={styles.plato}>
            {props.children}
        </div>
    )
}