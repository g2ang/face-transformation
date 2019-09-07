import React from 'react';
import { addDecorator, configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';

setAddon(infoAddon);

const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);

withOptions({
  name: 'Face Transformation',
  url: 'https://github.com/g2ang/face-transformation',
});

function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
