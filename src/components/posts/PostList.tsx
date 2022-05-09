import React, {useEffect} from "react";
import styles from "./PostList.module.scss";
import {FeedItemSkeleton} from "./FeedItemSkeleton";
import PostsProvider from "../../lib/api/posts/PostsProvider";

export const PostList = (props: any) => {
    const skeletonId = 'skeleton-loader';
    const contentBlockId = 'cID';

    useEffect(() => {

        const postProvider = new PostsProvider();
        postProvider.getItems().then((posts) => {
            const contentWrapper = document.querySelector(`#${contentBlockId}`);
            if (!contentWrapper)
                return;

            contentWrapper.innerHTML = '';
            posts.forEach((post) => {
                contentWrapper.innerHTML += `<h5>${post.text}</h5>`
            })
        })
    }, []);

    return (
        <div id={contentBlockId} className={styles.postListWrapper}>
            <FeedItemSkeleton skeletonId={skeletonId}/>
        </div>
    )
}