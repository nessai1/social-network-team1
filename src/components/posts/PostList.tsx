import React, {useEffect} from "react";
import styles from "./PostList.module.scss";
import {FeedItemSkeleton} from "./FeedItemSkeleton";

export const PostList = (props: any) => {
    const skeletonId = 'skeleton-loader';
    const contentBlockId = 'cID';

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(`#${contentBlockId}`).innerHTML = 'CONTENT LOADED';
        }, 2000);

    }, []);

    return (
        <div id={contentBlockId} className={styles.postListWrapper}>
            <FeedItemSkeleton skeletonId={skeletonId}/>
        </div>
    )
}