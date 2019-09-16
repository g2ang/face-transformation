import styled from 'styled-components';
import {
  border,
  maxWidth,
  minWidth,
  BorderProps,
  MaxWidthProps,
  MinWidthProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
} from 'styled-system';

import Flex, { FlexProps } from 'components/Flex';

type FlexLayoutProps = FlexProps &
  BorderProps &
  MaxWidthProps &
  MinWidthProps &
  OverflowProps &
  PositionProps;

const FlexLayout = styled(Flex)<FlexLayoutProps>(border, maxWidth, minWidth, overflow, position);

export default FlexLayout;
