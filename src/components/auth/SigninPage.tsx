import React from "react";
import styles from "./AuthPage.module.scss";
import { signIn } from "next-auth/react";

export const SigninPage = (props: any) => {
    const providers = props.providers;
    return (
        <div className={styles.signPage}>
            <div className={styles.teamOne}>
                <h2>TeamOne</h2>
                <button className={styles.buttonReg}>Регистрация</button>
            </div>
            <h1>Вход</h1>
            {Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                    <button
                        className={styles.buttonGit}
                        onClick={() => signIn(provider.id)}
                    >
                        Войти с помощью {provider.name}
                    </button>
                </div>
            ))}
            <p>или войти с помощью email</p>
            <div className={styles.inputs}>
                <input className={styles.SignInInput} placeholder={"Email"} />
                <input className={styles.SignInInput} placeholder={"Пароль"} />
                <span>Забыли пароль?</span>
            </div>
            <button className={styles.buttonSign}>Войти</button>
        </div>
    );
};
