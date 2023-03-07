import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="asset/images/favicon.ico" />

          <link href="/asset/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="/asset/css/tobii.min.css" rel="stylesheet" type="text/css" />
          <link href="/asset/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="/asset/css/tiny-slider.css" />
          <link href="/asset/css/style.css" rel="stylesheet" type="text/css" id="theme-opt" />
          <link href="/asset/css/colors/default.css" rel="stylesheet" id="color-opt" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body style={{ fontFamily: 'Nunito !important' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
