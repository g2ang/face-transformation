import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Flex from 'components/Flex';
import Text from 'components/Text';
import SlideImage from '.';

const stories = storiesOf('SlideImage', module);

const src =
  'https://user-images.githubusercontent.com/7760903/64474300-5d385b80-d1ae-11e9-8f62-ab3c5243f938.png';
const noop = () => {};

stories.addDecorator(withA11y).add('default', () => (
  <Flex width={700} height={100}>
    <Flex justifyContent="space-evenly" alignItems="center">
      <Text>Selected Image</Text>
      <SlideImage id={0} selected src={src} onClick={noop} />
    </Flex>
    <Flex justifyContent="space-evenly" alignItems="center">
      <Text>Un-selected Image that is blurred</Text>
      <SlideImage id={0} selected={false} src={src} onClick={noop} />
    </Flex>
  </Flex>
));
