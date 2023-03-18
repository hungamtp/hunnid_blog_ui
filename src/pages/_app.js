import Context from '@/utils/context';
import TagContext from '@/utils/tags';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/style.css';
const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  const Layout = Component.Layout;

  return (
    <TagContext>
      <Context>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </Context>
    </TagContext>
  );
};

export default MyApp;
