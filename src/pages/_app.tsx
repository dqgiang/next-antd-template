import React from 'react';
import { AppProps } from 'next/app';
require('../styles/globals.less');

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
