import {TPost} from "../../lib/api/posts/TPost";
import {Plato} from "../main/base/Plato";
import styles from "./PostCard.module.scss";
import {Avatar} from "../main/base/picture/Avatar";
import DateConverter from "../../lib/date/DateConverter";

type TProps = {
    post: TPost
}

export const PostCard = (props: TProps) => {

    const post = props.post;
    const dateConverter = new DateConverter(post.date);

    return (
        <Plato style={{marginTop: '20px'}}>
            <div className={styles.cardWrapper}>
                <div className={styles.cardHeader}>
                    <Avatar size={60} src={post.user.avatar} />
                    <div className={styles.authorData}>
                        <span className={styles.authorName}>{`${post.user.firstName} ${post.user.lastName}`}</span>
                        <span className={styles.postDate}>{dateConverter.getDateDifferenceString(new Date())}</span>
                    </div>
                </div>
                <p className={styles.postText}>{post.text}</p>
            </div>

        </Plato>
    );
}