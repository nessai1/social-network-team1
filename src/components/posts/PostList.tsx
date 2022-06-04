import { useEffect, useState, useRef } from "react";
import styles from "./PostList.module.scss";
import { FeedItemSkeleton } from "./FeedItemSkeleton";
import { PostsService, TPost } from "../../lib/api";
import { PostCard } from "./PostCard";
import Debounce from "../../lib/Debounce";

type TProps = {
    posts: TPost[];
    postsIsOver: boolean;
    offset: number;
};

export const PostList = () => {
    const limit = 55;
    const [postsData, setPosts] = useState<TProps>({
        postsIsOver: false,
        posts: [],
        offset: 0,
    });
    const skeletonRef = useRef<HTMLDivElement | null>(null);
    const offset = useRef<number>(0);
    const debounce = useRef<Debounce>(new Debounce(500));

    useEffect(() => {
        const postProvider = new PostsService();
        postProvider.getItems(offset.current, limit).then((posts) => {
            let postsIsOver;
            postsIsOver = posts.length < limit;
            offset.current += limit;
            setPosts({
                postsIsOver: postsIsOver,
                posts: posts,
                offset: offset.current + limit,
            });
        });

        window.addEventListener("scroll", () => {
            const skeletonRects = skeletonRef.current?.getClientRects()?.[0]; // спросить Тимура
            if (!skeletonRects) {
                return;
            }
            debounce.current.tryProcess(() => {
                console.log("DEBOUNCED!!!");
            });

            // if (skeletonRects.y < skeletonRects.height + 600) {
            //     postProvider.getItems(offset.current, limit).then((posts) => {
            //         const postsIsOver = posts.length < limit;
            //         offset.current += limit;
            //         const newValue = {
            //             postsIsOver: postsIsOver,
            //             posts: [...postsData.posts, ...posts],
            //             offset: offset.current + limit,
            //         };
            //         setPosts(newValue);
            //     });
            // }
        });
    }, []);

    return (
        <div className={styles.postListWrapper}>
            {postsData.posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
            <div ref={skeletonRef}>
                <FeedItemSkeleton />
            </div>
        </div>
    );
};
