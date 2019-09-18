import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import dataset from './constants';
import Showcase from '.';

const stories = storiesOf('Showcase', module);

stories
  .addDecorator(withA11y)
  .add('default', () => <Showcase images={dataset} onClick={action('onClick')} />);
