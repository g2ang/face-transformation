import styled from 'styled-components';
import { position, PositionProps } from 'styled-system';

import Box, { BoxProps } from 'components/Box';

type PositionBoxProps = BoxProps & PositionProps;

const PositionBox = styled(Box)<PositionBoxProps>(position);

export default PositionBox;
