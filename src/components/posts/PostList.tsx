import {useEffect, useState} from "react";
import styles from "./PostList.module.scss";
import {FeedItemSkeleton} from "./FeedItemSkeleton";
import PostsProvider from "../../lib/api/posts/PostsProvider";
import {TPost} from "../../lib/api/posts/TPost";
import {PostCard} from "./PostCard";

type TProps = {
    posts: TPost[],
    isLoading: boolean
}

export const PostList = () => {

    const [postsData, setPosts] = useState<TProps>({isLoading: true, posts: []});

    const skeletonId = 'skeleton-loader';
    const contentBlockId = 'cID';

    useEffect(() => {

        const postProvider = new PostsProvider();
        postProvider.getItems().then((posts) => {
            setPosts({isLoading: false, posts: posts});
        })

        return () => {
            console.log('delete trash');
        }
    }, []);

    return (
        <div id={contentBlockId} className={styles.postListWrapper}>
            {postsData.isLoading ?
                <FeedItemSkeleton/>
                : postsData.posts.map(post => (<PostCard key={post.id} post={post}/>))
            }
        </div>
    )
}