import React from 'react';
import { ImageProps } from 'rebass';

import Image from 'components/Image';

import noise from './noise.gif';

// eslint-disable-next-line react/jsx-props-no-spreading
const NoiseScreen: React.FC<ImageProps> = props => <Image {...props} src={noise} />;

export default NoiseScreen;
