import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import PropsType from 'components/PropsType';

const propTypes = {
  active: PropTypes.bool,
};

const defaultProps = {
  active: false,
};

type DarkButtonProps = PropsType<typeof propTypes, typeof defaultProps>;

const DarkButton = styled(Button)<DarkButtonProps>`
  background-color: black;
  opacity: ${props => (props.active ? 1 : 0.6)};
`;

DarkButton.defaultProps = defaultProps;

export default DarkButton;
