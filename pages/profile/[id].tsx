import { FeedList } from "../../src/components/posts/FeedList";
import { AppProps } from "next/app";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Session } from "next-auth";
import { Profile } from "../../src/components/profile/Profile";

type TProps = {
    session: Session;
};

function Feed(props: TProps) {
    const router = useRouter();
    const { id } = router.query;

    return <Profile userId={Number(id)} />;
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
