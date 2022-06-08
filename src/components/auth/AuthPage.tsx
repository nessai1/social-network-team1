import React from "react";
import { SigninPage } from "./SigninPage";
import styles from "./AuthPage.module.scss";

export const AuthPage = (props: any) => {
    return (
        <>
            <div className={styles.authWrapper}>
                <SigninPage
                    hasErrors={false}
                    onLogin={() => {
                        console.log("login");
                    }}
                />
            </div>
        </>
    );
};
