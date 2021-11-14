import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NORMALIZE } from '../src/config/normalize';
import { STYLES } from '../src/config/styles';

const GlobalStyle = createGlobalStyle`
  ${NORMALIZE}
  ${STYLES}
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title key="title">Backend Technical Test - PagoEfectivo</title>
        <meta
          property="og:title"
          content="Backend Technical Test - PagoEfectivo"
          key="og:title"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://admin.pagoefectivo.pe/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
