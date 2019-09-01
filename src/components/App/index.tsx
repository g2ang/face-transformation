import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">React Application</div>
    </ThemeProvider>
  );
};

export default hot(App);
