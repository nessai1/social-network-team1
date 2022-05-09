import React from "react";
import {PostEditor} from "./PostEditor";
import {PostList} from "./PostList";

export const FeedList = (props: any) => {
    return (
        <>
            <PostEditor />
            <PostList/>
        </>
    )
}