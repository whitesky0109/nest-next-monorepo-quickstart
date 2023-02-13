import React from 'react';

import { LoginPageContainerHook } from '../containers/pages/login/LoginPageContainerHook';

export const LoginPage: React.FC = () => {
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
      <button type="button" onClick={onClickLogin}>
        login
      </button>
    </>
  );
};

export default LoginPage;
