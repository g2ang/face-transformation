import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Box from 'components/Box';
import Button from 'components/Button';
import { Camera, CameraContext, CameraProvider } from '.';

const stories = storiesOf('Camera', module);

const CameraCapture: React.FC = () => {
  const { capture } = useContext(CameraContext);
  return (
    <Box>
      <Button
        backgroundColor="black"
        onClick={() => {
          const imageSrc = capture();
          console.log(imageSrc); // eslint-disable-line no-console
        }}
      >
        Click and See the console in DevTools
      </Button>
    </Box>
  );
};

stories
  .addDecorator(withA11y)
  .add('default', () => (
    <CameraProvider>
      <Camera />
    </CameraProvider>
  ))
  .add('with capture button', () => (
    <CameraProvider>
      <Camera />
      <CameraCapture />
    </CameraProvider>
  ));
