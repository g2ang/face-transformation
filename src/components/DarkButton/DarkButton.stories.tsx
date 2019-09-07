import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Box from 'components/Box';
import DarkButton from '.';

const stories = storiesOf('DarkButton', module);

stories.addDecorator(withA11y).add('default', () => (
  <>
    <DarkButton>Default</DarkButton>
    <Box margin={10} />
    <DarkButton disabled>Disabled</DarkButton>
  </>
));
