import styled from 'styled-components';
import { overflow, OverflowProps } from 'styled-system';

import Flex, { FlexProps } from 'components/Flex';

type OverflowFlexProps = FlexProps & OverflowProps;

const OverflowFlex = styled(Flex)<OverflowFlexProps>(overflow);

export default OverflowFlex;
