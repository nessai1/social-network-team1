import { FeedList } from "../src/components/posts/FeedList";
import { AppProps } from "next/app";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

function News(props: any) {
    const a = useSession();
    // @ts-ignore
    return <FeedList token={a.data.user.name} />;
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

export default News;
