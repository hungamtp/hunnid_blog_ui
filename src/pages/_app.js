import Context from '@/utils/context';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/Home.module.css';

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  const Layout = Component.Layout;

  return (
    <Context>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Context>
  );
};

export default MyApp;
