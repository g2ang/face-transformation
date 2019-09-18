import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import FlexLayout from '.';

const stories = storiesOf('FlexLayout', module);

stories
  .addDecorator(withA11y)
  .add('maxWidth', () => (
    <FlexLayout border="1px solid black" maxWidth={580} padding="1rem">
      FlexLayout component
    </FlexLayout>
  ))
  .add('minWidth', () => (
    <FlexLayout border="1px solid black" minWidth={400} padding="1rem">
      FlexLayout component
    </FlexLayout>
  ));
