import PropTypes from 'prop-types';
import styled from 'styled-components';

import BorderPositionBox from 'components/BorderPositionBox';
import PropsType from 'components/PropsType';

const propTypes = { color: PropTypes.string };

type CircleProps = PropsType<typeof propTypes>;

const Circle = styled(BorderPositionBox)<CircleProps>`
  border-radius: 50%;
  background-color: ${props => props.color || 'initial'};
`;

export default Circle;
