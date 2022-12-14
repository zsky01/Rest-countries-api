import 'styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "../store";
import {Nunito_Sans} from '@next/font/google'
import Head from 'next/head';
import {Container} from "../components/Container";
import {Header} from "../components/Header";

const nunito = Nunito_Sans({weight: ['300', '600', '800'], subsets: ['latin']})

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <Provider store={store}>
        <main className={nunito.className}>
          <Header />
          <Container>
            <Component {...pageProps} />
          </Container>
        </main>
      </Provider>
    </>
  )
}