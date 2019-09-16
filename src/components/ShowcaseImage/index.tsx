import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import PropsType from 'components/PropsType';

const propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

type ShowcaseImageProps = PropsType<typeof propTypes>;

const ShowcaseImage: React.FC<ShowcaseImageProps> = ({ id, src, onClick }) => (
  <Image
    height="100%"
    src={src}
    onClick={() => {
      onClick(id);
    }}
  />
);

ShowcaseImage.propTypes = propTypes;

export default ShowcaseImage;
