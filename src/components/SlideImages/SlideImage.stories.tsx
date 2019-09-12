import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Flex from 'components/Flex';
import SlideImages from '.';

import dataset from './constants';

const stories = storiesOf('SlideImages', module);

function SlideImagesStory() {
  const [selectedId, setSelectedId] = useState('');
  const images = dataset.map(({ id, src }) => ({ id, src, selected: selectedId === id }));
  return (
    <SlideImages
      images={images}
      onClick={id => {
        setSelectedId(id);
      }}
    />
  );
}

stories.addDecorator(withA11y).add('default', () => (
  <Flex width={400} height={100}>
    <SlideImagesStory />
  </Flex>
));
