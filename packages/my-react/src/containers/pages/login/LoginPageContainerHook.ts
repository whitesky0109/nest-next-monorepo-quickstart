import { useState } from "react";

export interface ILoginPageContainerState {
  id?: string,
  password?: string,
  authKey?: string | null,
}

export default function LoginPageContainerHook() {
  const [state, updateState] = useState<ILoginPageContainerState>({
    id: '',
    password: '',
    authKey: null,
  });

  const setState = (state: ILoginPageContainerState = {}) => updateState(prev => Object.assign({}, prev, state));

  const self = {
    state,
    setState,

    onChangeId: (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target: { value: id } } = event;
      setState({ id });
    },

    onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target: { value: password } } = event;
      setState({ password });
    },

    onClickLogin: async (_: React.MouseEvent<HTMLButtonElement>) => {
      const { id, password } = state;

      const response = await fetch('/auth/local', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          username: id,
          password,
        }),
      });

      if(response.redirected) {
        window.location.href = response.url;
      }

      switch (response.status) {
        case 201: {
          const authKey = await response.text();
          setState({ authKey });
        }
        // case 401:
        default:

      }
    }
  }

  return self;
}