import React from "react";
import styles from "./AuthPage.module.scss";
import { signIn } from "next-auth/react";

type TProps = {
    onLogin: Function;
    hasErrors: boolean;
};

export const SigninPage = (props: TProps) => {
    const callback = props.onLogin;

    const onSubmit = (event: any) => {
        const target = event.target;
        const login = target.querySelector("#login").value;
        const password = target.querySelector("#password").value;

        if (login !== "" && password !== "") {
            callback({ login, password });
        }
        event.preventDefault();
    };

    return (
        <div className={styles.signPage}>
            <div className={styles.teamOne}>
                <h2>TeamOne</h2>
                <button className={styles.buttonReg}>Регистрация</button>
            </div>
            <h1>Вход</h1>
            <p>или войти с помощью email</p>
            <form method="post" onSubmit={onSubmit} action="/">
                <div className={styles.inputs}>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        className={styles.SignInInput}
                        placeholder={"Login"}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className={styles.SignInInput}
                        placeholder={"Пароль"}
                    />
                </div>
                <button type="submit" className={styles.buttonSign}>
                    Войти
                </button>
            </form>
            {props.hasErrors && (
                <p className={styles.errorPlato}>Неверный логин или пароль</p>
            )}
        </div>
    );
};
