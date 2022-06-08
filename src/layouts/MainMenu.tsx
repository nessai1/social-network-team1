import { ReactNode } from "react";

import { Header } from "../components/main/menu/Header";
import styles from "./MainMenu.module.scss";
import { Sidebar } from "../components/main/menu/sidebar/Sidebar";
import { useRouter } from "next/router";

type TProps = {
    children: ReactNode;
};

export default function MainMenu(props: TProps) {
    const { asPath: ref } = useRouter();

    const pagePath = /\/[A-Z,a-z]*\/?/.exec(ref);
    let page;
    if (pagePath !== null) {
        page = pagePath[0].replace(/\//g, "");
    } else {
        page = "";
    }
    return (
        <>
            <Header avatarUrl={'https://c1.35photo.pro/photos_col/r2/376/1883602_500r.jpg'}></Header>
            <div className={styles.content}>
                <Sidebar
                    page={page}
                    avatarUrl={
                        "https://c1.35photo.pro/photos_col/r2/376/1883602_500r.jpg"
                    }
                    firstName={"Rebby"}
                    lastName={"Sends"}
                    uId={"rebsends"}
                />
                <div className={styles.renderContent}>{props.children}</div>
                <div></div>
            </div>
        </>
    );
}
