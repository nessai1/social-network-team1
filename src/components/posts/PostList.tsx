import React, {useEffect} from "react";
import styles from "./PostList.module.scss";
import {FeedItemSkeleton} from "./FeedItemSkeleton";

export const PostList = (props: any) => {
    const skeletonId = 'skeleton-loader';
    const contentBlockId = 'cID';

    useEffect(() => {

        

    }, []);

    return (
        <div id={contentBlockId} className={styles.postListWrapper}>
            <FeedItemSkeleton skeletonId={skeletonId}/>
        </div>
    )
}