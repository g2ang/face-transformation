import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Layout from 'components/Layout';
import Circle from '.';

const stories = storiesOf('Circle', module);

stories.addDecorator(withA11y).add('maxWidth', () => (
  <Layout>
    <Circle color="green" width={20} height={20} />
  </Layout>
));
