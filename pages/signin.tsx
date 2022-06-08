import {SigninPage} from "../src/components/auth/SigninPage";
import { getSession, signIn, useSession } from "next-auth/react";

type TUserData = {
    password: string;
    login: string;
};


export default function SignIn() {

    const callback = (data: any) => {
        signIn('credentials', {
            redirect: true,
            password: data.password,
            login: data.login
        });
    }

    return <SigninPage onLogin={callback}/>
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (session) {
        return {
            redirect: {
                destination: "/feed",
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