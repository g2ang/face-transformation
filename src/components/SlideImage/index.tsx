import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import PropsType from 'components/PropsType';

const propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  selected: false,
};

type SlideImage = PropsType<typeof propTypes>;

const SlideImage: React.FC<SlideImage> = ({ id, src, selected, onClick }) => (
  <Image
    src={src}
    opacity={selected ? 1 : 0.2}
    height="100%"
    flex="none"
    onClick={() => onClick(id)}
  />
);

SlideImage.propTypes = propTypes;
SlideImage.defaultProps = defaultProps;

export default SlideImage;
