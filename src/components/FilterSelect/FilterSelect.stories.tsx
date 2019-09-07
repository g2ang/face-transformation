import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Layout from 'components/Layout';
import FilterSelect, { Filter } from '.';

const stories = storiesOf('FilterSelect', module);

function FilterSelectStory() {
  const [filter, setFilter] = useState(Filter.CAMERA);
  return <FilterSelect currentFilter={filter} onClick={setFilter} />;
}

stories.addDecorator(withA11y).add('default', () => (
  <Layout maxWidth={450}>
    <FilterSelectStory />
  </Layout>
));
