import React from 'react';
import { NextPage } from 'next';

import LoginPageContainerHook from '../../../containers/pages/login/LoginPageContainerHook';

interface Props {
  pathname: string;
}

const LoginPage: NextPage<Props> = () => {
  const {
    state: { id, password },
    onChangeId,
    onChangePassword,
    onClickLogin,
  } = LoginPageContainerHook();

  return (
    <>
      <div>
        <span>id</span>
        <input type="text" value={id} onChange={onChangeId} />
      </div>

      <div>
        <span>password</span>
        <input type="password" value={password} onChange={onChangePassword} />
      </div>
      <button onClick={onClickLogin}>login</button>
    </>
  );
};

LoginPage.getInitialProps = (ctx) => {
  const { pathname } = ctx;

  return { pathname };
};

export default LoginPage;
