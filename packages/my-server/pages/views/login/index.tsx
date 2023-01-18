import React from 'react';
import { NextPage } from 'next';

interface Props {
  pathname: string;
}

const LoginPage: NextPage<Props> = () => {
  return (
    <div>
      <div>login Page</div>
    </div>
  );
};

LoginPage.getInitialProps = (ctx) => {
  const { pathname } = ctx;

  return { pathname };
};

export default LoginPage;
