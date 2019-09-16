import { Flex as RebassFlex, FlexProps as RebassFlexProps } from 'rebass/styled-components';
import styled from 'styled-components';
import { position, PositionProps } from 'styled-system';

export type FlexProps = RebassFlexProps & PositionProps;

const Flex = styled(RebassFlex)<FlexProps>(position);

export default Flex;
