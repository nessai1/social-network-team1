import { Plato } from "../main/base/Plato";
import styles from "./HeaderContent.module.scss";
import { Image } from "../main/base/picture/Image";

export const HeaderContent = () => {
    return (
        <Plato>
            <div className={styles.upperInfo}>
                <div className={styles.imagesBar}>
                    <Image
                        src={
                            "https://avatars.mds.yandex.net/i?id=53264e55f069199aa9d2fb292f83ed94_l-5316602-images-thumbs&ref=rim&n=13&w=1080&h=1350"
                        }
                        height={200}
                    />
                    <Image
                        src={
                            "https://i.pinimg.com/originals/61/a0/70/61a070a604f5a7695d8c2ff18bff801b.jpg"
                        }
                        height={200}
                    />
                    <Image
                        src={
                            "https://i.pinimg.com/originals/f5/6c/b0/f56cb0c5074f052031cb3cd65ce437ab.jpg"
                        }
                        height={200}
                    />
                    <Image
                        src={
                            "https://i.pinimg.com/originals/13/42/38/1342384be455e082fd51f4068093f314.jpg"
                        }
                        height={200}
                    />
                </div>
            </div>
            <p className={styles.aboutMe}>
                Счастье для каждого свое: кто-то радуется солнцу каждое утро, а
                другим икра невкусная.
                <br />
                <br /> А так - я фотограф 😉
                <br />
                Фотография – это способ чувствовать, касаться, любить. То, что
                вы поймали на пленку, запечатлено навсегда… плёнка запоминает
                мелочи, хранит память о мелочах даже тогда, когда вы всё
                забыли...
            </p>
        </Plato>
    );
};
