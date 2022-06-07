import React from "react";
import { PostEditor } from "./PostEditor";
import { PostList } from "./PostList";
import { Loader } from "../main/base/Loader";

export const FeedList = (props: any) => {
    return (
        <>
            <PostEditor />
            <PostList />
        </>
    );
};
