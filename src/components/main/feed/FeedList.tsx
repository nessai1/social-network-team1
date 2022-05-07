import React, {useState, useEffect} from 'react';

type TProps = {

}

type TPost = {
    title: string
}

export const FeedList = (data: TProps) => {
    const [posts, setPosts] = useState<TPost[]>([{title: '1253'}]);

    useEffect(() => {
        setInterval(() => {
            setPosts((prevState) => {
                return [...prevState, {title: 'af'}]
            })
        }, 1000);


    },[]);

    return (
        <>
            <div>
                {
                    posts.map((post) => {
                        return post.title;
                    })
                }
            </div>
        </>
    );
}