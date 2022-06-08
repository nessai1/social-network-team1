import { SessionProvider, signIn } from "next-auth/react";
import "../src/styles/global.scss";
import MainMenu from "../src/layouts/MainMenu";
import type { AppProps } from "next/app";
import { useEffect, useLayoutEffect } from "react";
import { redirect } from "next/dist/server/api-utils";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    if (!session) {
        return (
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        );
    }
    return (
        <SessionProvider session={session}>
            <MainMenu>
                <Component {...pageProps} />
            </MainMenu>
        </SessionProvider>
    );
}

export default MyApp;
