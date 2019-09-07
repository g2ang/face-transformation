import styled from 'styled-components';

import Button from 'components/Button';

const DarkButton = styled(Button)`
  background-color: black;
  :disabled {
    opacity: 0.6;
  }
`;

export default DarkButton;
