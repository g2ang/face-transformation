import { useState, useCallback } from 'react';

import { RefCallback } from 'components/useCombinedRefs';

/**
 * Hack for accessing video tag.
 * react-webcam isn't support forwarded ref
 */
function useWebcamClientWidth() {
  const [clientWidth, setClientWidth] = useState(0);
  const ref = useCallback<RefCallback<any>>(webcam => {
    if (webcam && webcam.video) {
      setClientWidth(webcam.video.clientWidth);
    }
  }, []);
  return [clientWidth, ref] as [number, RefCallback<any>];
}

export default useWebcamClientWidth;
