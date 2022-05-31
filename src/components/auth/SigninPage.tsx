import React from "react";
import styles from "./AuthPage.module.scss";

export const SigninPage = (props: any)=> {
    return (
        <div className={styles.signPage}>
            <div className={styles.teamOne}>
                <h2>TeamOne</h2>
                <button className={styles.buttonReg}>Регистрация</button>
            </div>
            <h1>Вход</h1>
            <button className={styles.buttonGit}>Войти с помощью GitHub</button>
            <p>или войти с помощью email</p>
            <div className={styles.inputs}>
                <input className={styles.SignInInput} placeholder={"Email"}/>
                <input className={styles.SignInInput} placeholder={"Пароль"}/>
                <span>Забыли пароль? - идите в пизду</span>
            </div>
            <button className={styles.buttonSign}>Войти</button>
        </div>
    );
};