import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Theme, GlobalStyle } from './styling';
import Store from './state';
import App from './containers/App';

const RootApp: React.FC<{}> = () => (
  <Provider store={Store}>
    <ThemeProvider theme={Theme}>
      <Fragment>
        <Normalize />
        <GlobalStyle />
        <App />
      </Fragment>
    </ThemeProvider>
  </Provider>
);

render(<RootApp />, document.getElementById('app'));
