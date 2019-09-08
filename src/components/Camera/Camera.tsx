import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import Webcam from 'react-webcam';

import useCombinedRefs from 'components/useCombinedRefs';
import useWebcamClientWidth from './useWebcamClientWidth';
import { CameraContext } from './CameraProvider';

const Camera: React.FC = props => {
  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      return imageSrc;
    }
    return null;
  }, []);
  const { setCapture, setEnable, setError } = useContext(CameraContext);
  const [clientWidth, clientWidthRef] = useWebcamClientWidth();
  const videoConstraints = useMemo(
    () => ({
      facingMode: 'user',
      height: clientWidth,
    }),
    [clientWidth]
  );

  useEffect(() => {
    setCapture(capture);
  }, [capture, setCapture]);

  const refs = useCombinedRefs(webcamRef, clientWidthRef);

  return (
    <Webcam
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      audio={false}
      ref={refs}
      screenshotFormat="image/jpeg"
      width="100%"
      height={clientWidth}
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
  );
};

export default Camera;
