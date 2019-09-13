import styled from 'styled-components';
import {
  border,
  maxWidth,
  minWidth,
  BorderProps,
  MaxWidthProps,
  MinWidthProps,
} from 'styled-system';

import Flex, { FlexProps } from 'components/Flex';

type FlexLayoutProps = FlexProps & BorderProps & MaxWidthProps & MinWidthProps;

const FlexLayout = styled(Flex)<FlexLayoutProps>(border, maxWidth, minWidth);

export default FlexLayout;
