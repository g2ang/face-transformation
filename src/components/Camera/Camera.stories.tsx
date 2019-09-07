import React, { useContext, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Box from 'components/Box';
import Button from 'components/Button';
import { Camera, CameraContext, CameraProvider } from '.';

const stories = storiesOf('Camera', module);

const CameraCapture: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('');
  const { capture } = useContext(CameraContext);
  return (
    <Box>
      <Box marginBottom={10}>{imageSrc}</Box>
      <Button
        backgroundColor="black"
        onClick={() => {
          const src = capture();
          setImageSrc(src);
        }}
      >
        Click and See the result
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
