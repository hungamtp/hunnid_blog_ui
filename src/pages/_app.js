import Context from '@/utils/languageContext';
import TagContext from '@/utils/tags';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/style.css';
import CreatePostContext from '@/utils/create-post-context';
import AllLanguageContext from '@/utils/all-languages-context';
import AdminLanguageContext from '@/utils/admin-language-context';
import PostContentTypeContext from '@/utils/post-content-type-context';
import CurrentTitleContext from '@/utils/current-title';
const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  const Layout = Component.Layout;

  return (
    <CurrentTitleContext>
      <PostContentTypeContext>
        <AdminLanguageContext>
          <AllLanguageContext>
            <CreatePostContext>
              <TagContext>
                <Context>
                  <QueryClientProvider client={queryClient}>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </QueryClientProvider>
                </Context>
              </TagContext>
            </CreatePostContext>
          </AllLanguageContext>
        </AdminLanguageContext>
      </PostContentTypeContext>
    </CurrentTitleContext>
  );
};

export default MyApp;
