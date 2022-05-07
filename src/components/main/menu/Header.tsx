import styles from './Header.module.scss';
import arrow from './svg/arrow.svg';
import React from 'react';

type TProps = {
    avatarUrl: string,
};


export const Header = ({avatarUrl} : TProps) => {

    const avatarStyle = {
        background: 'no-repeat center center',
        backgroundSize: 'cover',
        backgroundImage: 'url('+ avatarUrl +')',
    };

    return (
        <div className={styles.header}>
            <span className={styles.headerLogo}>TeamOne</span>
            <div  className={styles.headerControl}>
                <div className={styles.avatar} style={avatarStyle}></div>
                <div className={styles.arrow}><img src={arrow.src}/></div>
            </div>
        </div>
    );
}