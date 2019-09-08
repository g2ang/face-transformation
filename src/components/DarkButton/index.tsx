import styled from 'styled-components';

import Button from 'components/Button';

const DarkButton = styled(Button)`
  background-color: black;
  opacity: 0.6;
  :disabled {
    opacity: 1;
  }
`;

export default DarkButton;
