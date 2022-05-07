import styles from './Header.module.scss';
import arrow from './svg/arrow.svg';
import React from 'react';
import {Avatar} from "../base/picture/Avatar";

type TProps = {
    avatarUrl: string,
};


export const Header = ({avatarUrl} : TProps) => {


    return (
        <div className={styles.header}>
            <span className={styles.headerLogo}>TeamOne</span>
            <div  className={styles.headerControl}>
                <Avatar size={60} src={avatarUrl}/>
                <div className={styles.arrow}><img src={arrow.src}/></div>
            </div>
        </div>
    );
}