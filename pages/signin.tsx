import { SigninPage } from "../src/components/auth/SigninPage";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

type TUserData = {
    password: string;
    login: string;
};

export default function SignIn() {
    const router = useRouter();
    const { error } = router.query;
    let hasErrors = false;
    if (error) {
        hasErrors = true;
    }
    const callback = (data: any) => {
        signIn("credentials", {
            redirect: false,
            password: data.password,
            login: data.login,
        });

        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    return <SigninPage hasErrors={hasErrors} onLogin={callback} />;
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (session) {
        return {
            redirect: {
                destination: "/news",
                status: 200,
            },
        };
    }

    return {
        props: {
            session: session,
        },
    };
}
