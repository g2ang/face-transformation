import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Layout from '.';

const stories = storiesOf('Layout', module);

stories
  .addDecorator(withA11y)
  .add('maxWidth', () => (
    <Layout border="1px solid black" maxWidth={580} padding="1rem">
      Layout component
    </Layout>
  ))
  .add('minWidth', () => (
    <Layout border="1px solid black" minWidth={400} padding="1rem">
      Layout component
    </Layout>
  ));
