import { Infobar } from "./Infobar";
import { Contentbar } from "./Contentbar";
import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

type TProps = {
    userId: number | string;
};

export const Profile = (props: TProps) => {
    return (
        <div className={styles.profile}>
            <Infobar />
            <Contentbar />
        </div>
    );
};
