import styled from 'styled-components';
import {
  border,
  maxWidth,
  minWidth,
  BorderProps,
  MaxWidthProps,
  MinWidthProps,
} from 'styled-system';

import Box, { BoxProps } from 'components/Box';

type LayoutProps = BoxProps & BorderProps & MaxWidthProps & MinWidthProps;

const Layout = styled(Box)<LayoutProps>(border, maxWidth, minWidth);

export default Layout;
