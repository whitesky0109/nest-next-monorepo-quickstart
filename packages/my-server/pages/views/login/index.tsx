import { NextPage } from 'next';

import Page from 'my-react/src/pages/LoginPage';

const LoginPage: NextPage = Page;

LoginPage.getInitialProps = (ctx) => {
  const { pathname } = ctx;

  return { pathname };
};

export default LoginPage;
