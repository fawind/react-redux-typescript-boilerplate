import * as React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '@src/store';
import App from '@src/containers/App';

type Props = {};

const store = configureStore();

export const AppProvider: React.SFC<Props> = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
