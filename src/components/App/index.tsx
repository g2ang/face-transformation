import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CameraProvider } from 'components/Camera';
import Routes from 'pages/Routes';

import theme from '../../theme';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <CameraProvider>
        <Routes />
      </CameraProvider>
    </ThemeProvider>
  </Router>
);

export default hot(App);
