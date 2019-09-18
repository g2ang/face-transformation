import styled from 'styled-components';
import { border, BorderProps, position, PositionProps } from 'styled-system';

import Box, { BoxProps } from 'components/Box';

export type BorderPositionBoxProps = BorderProps & BoxProps & PositionProps;

const BorderPositionBox = styled(Box)<BorderPositionBoxProps>(border, position);

export default BorderPositionBox;
