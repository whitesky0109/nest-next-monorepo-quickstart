import { useState } from "react";

export interface ILoginPageContainerState {
  id?: string,
  password?: string,
}

export default function LoginPageContainerHook() {
  const [state, updateState] = useState<ILoginPageContainerState>({
    id: '',
    password: '',
  });

  const setState = (state: ILoginPageContainerState = {}) => updateState(prev => Object.assign({}, prev, state));

  const self = {
    state, setState,

    onChangeId: (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target: { value: id } } = event;
      setState({ id });
    },

    onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target: { value: password } } = event;
      setState({ password });
    },

    onClickLogin: (_: React.MouseEvent<HTMLButtonElement>) => {
      const { id, password } = state;

      console.log(id, password);
    }
  }

  return self;
}