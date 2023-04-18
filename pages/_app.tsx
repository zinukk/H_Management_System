import { useEffect, useState } from 'react';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import global from 'styles/global';
import theme from 'styles/theme';
import Layout from '@src/components/common/Layout/Layout';
import Spinner from '@src/components/common/Spinner';
import { useLoading } from '@src/hooks/useLoading';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const isLoading = useLoading();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Layout>
              <Global styles={global} />
              <Component {...pageProps} />
              {isLoading ? <Spinner /> : null}
            </Layout>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
