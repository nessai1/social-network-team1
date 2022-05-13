import {useEffect, useState} from "react";
import styles from "./PostList.module.scss";
import {FeedItemSkeleton} from "./FeedItemSkeleton";
import {PostsService, TPost} from "../../lib/api";
import {PostCard} from "./PostCard";

type TProps = {
    posts: TPost[],
    postsIsOver: boolean
}

export const PostList = () => {

    const [postsData, setPosts] = useState<TProps>({postsIsOver: false, posts: []});
    const skeletonId = 'skeleton';

    useEffect(() => {

        const limit = 10;
        const postProvider = new PostsService();
        postProvider.getItems(0, limit).then((posts) => {
            let postsIsOver;
            postsIsOver = posts.length < limit;
            setPosts({postsIsOver: postsIsOver, posts: posts});
        });


        const scrollListener = (event: Event) => {
            const skeletonNode = document.querySelector(`#${skeletonId}`);
            if (skeletonNode === null) {
                window.removeEventListener('scroll', scrollListener);
                return;
            }

            console.log(skeletonNode.getClientRects());
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className={styles.postListWrapper}>
            {postsData.posts.map(post => (<PostCard key={post.id} post={post}/>))}
            {postsData.postsIsOver ? '' : <div id={skeletonId}><FeedItemSkeleton/></div>}
        </div>
    )
}