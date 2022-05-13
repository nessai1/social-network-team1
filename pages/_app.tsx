import '../src/styles/global.scss'
import MainMenu from "../src/layouts/MainMenu";
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {

    const userId = 1;

    return (
        <MainMenu>
            <Component {...pageProps} />
        </MainMenu>
    );
}
