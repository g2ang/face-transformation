import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setAddon(infoAddon);

const req = require.context('../src', true, /\.stories\.tsx$/);

setOptions({
  name: 'Face Transformation',
  url: 'https://github.com/g2ang/face-transformation',
});

function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
