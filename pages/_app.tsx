import '../src/styles/global.css'
import MainMenu from "../src/layouts/MainMenu";
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MainMenu>
      <Component {...pageProps} />
      </MainMenu>
  );
}
