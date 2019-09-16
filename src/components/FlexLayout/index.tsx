import styled from 'styled-components';
import {
  border,
  maxWidth,
  minWidth,
  BorderProps,
  MaxWidthProps,
  MinWidthProps,
  position,
  PositionProps,
} from 'styled-system';

import Flex, { FlexProps } from 'components/Flex';

type FlexLayoutProps = FlexProps & BorderProps & MaxWidthProps & MinWidthProps & PositionProps;

const FlexLayout = styled(Flex)<FlexLayoutProps>(border, maxWidth, minWidth, position);

export default FlexLayout;
