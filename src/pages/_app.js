import '@/styles/globals.css';
import React from 'react';
import App from 'next/app';
import MainLayout from '../../components/layouts/main';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout;

    return (
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    );
  }
}

export default MyApp;
