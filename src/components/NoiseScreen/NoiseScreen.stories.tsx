import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Box from 'components/Box';
import NoiseScreen from '.';

const stories = storiesOf('NoiseScreen', module);

stories.addDecorator(withA11y).add('default', () => (
  <Box width={1000}>
    <NoiseScreen />
  </Box>
));
