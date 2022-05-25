import { TImage } from "./TImage";
import styles from "./Image.module.scss";

type TImageStyle = {
    backgroundImage?: string;
    background: string;
};

export function Image(image: TImage) {
    const imageStyle = {
        background: "no-repeat center center",
        backgroundSize: "cover",
        backgroundImage: "url(" + image.src + ")",
        width: image.width ?? "auto",
        height: image.height ?? "auto",
    };

    return (
        <div className={styles.image} style={imageStyle}>
            <img
                src={image.src}
                alt="some pick"
                height={imageStyle.height}
                width={imageStyle.width}
            />
        </div>
    );
}
