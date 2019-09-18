import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from 'components/Image';
import PropsType from 'components/PropsType';

const propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

type ShowcaseImageProps = PropsType<typeof propTypes>;

const BlurredImage = styled(Image)`
  transition: opacity 0.8s;
  :hover {
    opacity: 0.4;
  }
`;

const ShowcaseImage: React.FC<ShowcaseImageProps> = ({ id, src, onClick }) => (
  <a href={src} download target="_blank" rel="noopener noreferrer">
    <BlurredImage
      height="100%"
      src={src}
      onClick={() => {
        onClick(id);
      }}
    />
  </a>
);

ShowcaseImage.propTypes = propTypes;

export default ShowcaseImage;
