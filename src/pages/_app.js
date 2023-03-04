import '@/styles/globals.css';
import React from 'react';
import App from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  const Layout = Component.Layout;

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
