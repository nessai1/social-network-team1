import {TPost} from "../../lib/api/posts/TPost";

type TProps = {
    post: TPost
}

export const PostCard = (props: TProps) => {
    return <>{JSON.stringify(props)}</>
}