import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './state';
import App from './containers/App';

const RootApp: React.FC<{}> = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

render(<RootApp />, document.getElementById('app'));
