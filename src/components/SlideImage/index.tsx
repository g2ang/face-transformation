import React from 'react';
import PropTypes from 'prop-types';

import Circle from 'components/Circle';
import Flex from 'components/Flex';
import Image from 'components/Image';
import PropsType from 'components/PropsType';

const propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  generated: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

type SlideImage = PropsType<typeof propTypes>;

const SlideImage: React.FC<SlideImage> = ({ id, src, selected, generated, onClick }) => (
  <Flex flex="none" position="relative">
    {generated && (
      <Circle position="absolute" color="green" width={20} height={20} top={15} right={15} />
    )}
    <Image
      src={src}
      opacity={selected ? 1 : 0.4}
      height="100%"
      flex="none"
      onClick={() => onClick(id)}
    />
  </Flex>
);

SlideImage.propTypes = propTypes;

export default SlideImage;
