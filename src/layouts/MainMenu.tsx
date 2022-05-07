import {ReactNode} from "react";

import {Header} from "../components/main/menu/Header";
import styles from "./MainMenu.module.scss";
import {Sidebar} from "../components/main/menu/sidebar/Sidebar";

type TProps = {
    children: ReactNode,
}


export default function MainMenu(props: TProps) {
    return (
        <>
            <Header avatarUrl='https://c1.35photo.pro/photos_col/r2/376/1883602_500r.jpg'></Header>
            <div className={styles.content}>
                <Sidebar/>
            </div>
        </>
    );
}