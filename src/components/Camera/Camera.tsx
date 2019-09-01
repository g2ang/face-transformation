import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { useWindowSize } from 'react-use';
import Webcam from 'react-webcam';

import Box from 'components/Box';
import { CameraContext } from './CameraProvider';

const Camera: React.FC = props => {
  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      return imageSrc;
    }
    return null;
  }, [webcamRef]);
  const { setCapture, setEnable, setError } = useContext(CameraContext);
  const { width } = useWindowSize();
  const maxWidth = width > 750 ? 750 : width;
  const videoConstraints = useMemo(
    () => ({
      facingMode: 'user',
      width: maxWidth,
      height: maxWidth,
    }),
    [maxWidth]
  );

  useEffect(() => {
    setCapture(capture);
  }, [capture, setCapture]);

  return (
    <Box width={maxWidth} height={maxWidth} sx={{ display: 'inline-block' }}>
      <Webcam
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={() => {
          setCapture(capture);
          setEnable(true);
        }}
        /* eslint-disable @typescript-eslint/ban-ts-ignore */
        // @ts-ignore onUserMediaError is not properly typed in @types/react-webcam
        onUserMediaError={(error: DOMException) => {
          setEnable(false);
          setError(error);
        }}
        /* eslint-enable @typescript-eslint/ban-ts-ignore */
      />
    </Box>
  );
};

export default Camera;
