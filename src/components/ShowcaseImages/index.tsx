import React from 'react';
import PropTypes from 'prop-types';

import Filter from 'components/App/models/Filter';
import OverflowFlex from 'components/OverflowFlex';
import PropsType from 'components/PropsType';
import ShowcaseImage from 'components/ShowcaseImage';

const propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      coefficient: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  type: PropTypes.oneOf([Filter.GENDER, Filter.SMILE]).isRequired,
  onClick: PropTypes.func.isRequired,
};

type ShowcaseImagesProps = PropsType<typeof propTypes>;

const ShowcaseImages: React.FC<ShowcaseImagesProps> = ({ images, onClick }) => (
  <OverflowFlex overflowX="scroll">
    {images.map(({ id, src }) => (
      <ShowcaseImage id={id} key={id} src={src} onClick={onClick} />
    ))}
  </OverflowFlex>
);

ShowcaseImages.propTypes = propTypes;

export default ShowcaseImages;
