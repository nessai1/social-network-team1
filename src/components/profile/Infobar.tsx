import { Plato } from "../main/base/Plato";
import styles from "./Infobar.module.scss";

export const Infobar = () => {
    return (
        <div>
            <Plato>
                <div className={styles.infobar}>
                    <img
                        src="https://dl.airtable.com/.attachments/b3f6b0781e54c5261a0eb4bcb021016b/611db77b/Screenshot_1.jpg"
                        alt="Женщина"
                        className={styles.profileAvatar}
                    />
                    <div className={styles.profileMiniInfo}>
                        <span className={styles.userName}>Daniel Verevkin</span>
                        <span className={styles.userCountry}>
                            Kaliningrad · Russia
                        </span>
                        <div className={styles.userInfo}>
                            <div className={styles.userInfo__item}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8,8 L4,8 L4,13 L11,13 L13,13 L20,13 L20,8 L16,8 L8,8 Z M8,6 L8,5 C8,3.8954305 8.8954305,3 10,3 L14,3 C15.1045695,3 16,3.8954305 16,5 L16,6 L20,6 C21.1045695,6 22,6.8954305 22,8 L22,19 C22,20.1045695 21.1045695,21 20,21 L4,21 C2.8954305,21 2,20.1045695 2,19 L2,8 C2,6.8954305 2.8954305,6 4,6 L8,6 Z M11,15 L4,15 L4,19 L20,19 L20,15 L13,15 L13,16 L11,16 L11,15 Z M14,6 L14,5 L10,5 L10,6 L14,6 Z"
                                    />
                                </svg>
                                <span>Google Inc.</span>
                            </div>
                            <div className={styles.userInfo__item}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <polygon
                                        fill="var(--ci-primary-color, currentColor)"
                                        points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643"
                                        className="ci-primary"
                                    />
                                    <path
                                        fill="var(--ci-primary-color, currentColor)"
                                        d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z"
                                        className="ci-primary"
                                    />
                                </svg>
                                <span>Baltic Federal Sharaga</span>
                            </div>
                        </div>
                        <button className={styles.sendMessageBtn}>
                            Написать сообщение
                        </button>
                    </div>
                </div>
            </Plato>
        </div>
    );
};
