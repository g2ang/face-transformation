import React from 'react';
import PropTypes from 'prop-types';

import OverflowFlex from 'components/OverflowFlex';
import PropsType from 'components/PropsType';
import SlideImage from 'components/SlideImage';

const propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

type SlideImagesProps = PropsType<typeof propTypes>;

const SlideImages: React.FC<SlideImagesProps> = ({ images, onClick }) => (
  <OverflowFlex overflowX="scroll">
    {images.map(({ id, src, selected }) => (
      <SlideImage id={id} key={id} src={src} selected={selected} onClick={onClick} />
    ))}
  </OverflowFlex>
);

SlideImages.propTypes = propTypes;

export default SlideImages;
