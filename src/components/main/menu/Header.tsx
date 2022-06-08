import styles from "./Header.module.scss";
import arrow from "./svg/arrow.svg";
import React from "react";
import { Avatar } from "../base/picture/Avatar";
import { signOut } from "next-auth/react";

type TProps = {
    avatarUrl: string;
};

export const Header = ({ avatarUrl }: TProps) => {
    return (
        <div className={styles.header}>
            <span className={styles.headerLogo}>TeamOne</span>
            <div className={styles.headerControl}>
                <Avatar size={60} src={avatarUrl} />
                <button
                    className={styles.logoutButton}
                    onClick={() => {
                        signOut();
                    }}
                >
                    Log out
                </button>
            </div>
        </div>
    );
};
