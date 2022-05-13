import { FeedList } from "../src/components/posts/FeedList";
import { AppProps } from "next/app";
import { getSession } from "next-auth/react";

function Feed() {
    return <FeedList />;
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/signin",
                status: 401,
            },
        };
    }

    return {
        props: {
            session: session,
        },
    };
}

export default Feed;
