import React from 'react';
import { AppProps } from 'next/app';
import '../styles/antd.min.css';
import '../styles/layout.min.css';
require('../styles/globals.less');

function MyApp({ Component, pageProps }: AppProps) {
  // HACK: disable SSR by return null to fix (temporarily) issue with antd style not apply correctly at first load
  // This is intended for dashboard app, using antd, hence this fix is acceptable.
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
