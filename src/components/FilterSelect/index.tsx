import React from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/Flex';
import DarkButton from 'components/DarkButton';
import PropsType from 'components/PropsType';

export enum Filter {
  CAMERA = 'CAMERA',
  GENDER = 'GENDER',
  SMILE = 'SMILE',
}

const propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

type FilterSelectProps = PropsType<typeof propTypes>;

const menus = [
  { text: 'Camera', filter: Filter.CAMERA },
  { text: 'Smile', filter: Filter.SMILE },
  { text: 'Gender', filter: Filter.GENDER },
];

const FilterSelect: React.FC<FilterSelectProps> = ({ currentFilter, onClick }) => (
  <Flex padding="1rem" justifyContent="space-around">
    {menus.map(({ text, filter }) => (
      <DarkButton
        type="button"
        key={`dark--button--${filter}`}
        active={currentFilter === filter}
        onClick={() => onClick(filter)}
      >
        {text}
      </DarkButton>
    ))}
  </Flex>
);

FilterSelect.propTypes = propTypes;

export default FilterSelect;
