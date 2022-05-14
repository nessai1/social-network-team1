import { FeedList } from "../src/components/posts/FeedList";
import { AppProps } from "next/app";
import { getSession } from "next-auth/react";

function Index() {
    return <></>;
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
        redirect: {
            destination: "/feed",
            status: 200,
        },
    };
}

export default Index;
