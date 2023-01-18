import type { AppProps } from 'next/app';
import Sidebar from '../components/sidebar';
import { AppContextType, NextComponentType } from 'next/dist/shared/lib/utils';

export type AppComponentType<PP> = NextComponentType<AppContextType, any, AppProps<PP>>;

interface PageProps {
  pathname?: string; // ref. view/login/index.tsx
}

const MyApp: AppComponentType<PageProps> = ({ Component, pageProps }) => {
  switch (pageProps && pageProps.pathname) {
    case '/views/login': {
      return <Component {...pageProps} />
    }

    default:
      return (
        <div style={{ display: 'flex', maxWidth: 1100 }}>
          <div style={{ flexBasis: '30%', margin: 25 }}>
            <Sidebar />
          </div>
          <div style={{ flexBasis: '70%', margin: 25 }}>
            <Component {...pageProps} />
          </div>
        </div>
      );
  }
};

MyApp.getInitialProps = async (context: AppContextType) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    // Component (pages 폴더에 있는 컴포넌트)에 getInitialProps가 있다면
    pageProps = (await Component.getInitialProps(ctx)) || {};
  }

  return { pageProps };
};

export default MyApp;
