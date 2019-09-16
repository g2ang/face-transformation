import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'pages/Routes';
import AppStateProvider from './AppStateProvider';

import theme from '../../theme';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <>
        <AppStateProvider>
          <Routes />
        </AppStateProvider>
      </>
    </ThemeProvider>
  </Router>
);

export default hot(App);
