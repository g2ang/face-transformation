import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PropsType } from 'components/PropsType';

const defaultValue = {
  enable: false,
  error: new DOMException(),
  capture() {
    return '';
  },
  setCapture(fn: () => string | null) {},
  setEnable(enable: boolean) {},
  setError(error: DOMException) {},
};
export const CameraContext = React.createContext(defaultValue);

const propTypes = { children: PropTypes.node };
const defaultProps = { children: null };
type CameraProviderProps = PropsType<typeof propTypes, typeof defaultProps>;

const CameraProvider: React.FC<CameraProviderProps> = ({ children }) => {
  const [enable, setEnable] = useState(false);
  const [capture, setCapture] = useState<() => string>(() => () => '');
  const [error, setError] = useState(new DOMException());
  const setCaptureCallback = (fn: () => string) => {
    setCapture(() => fn);
  };

  return (
    <CameraContext.Provider
      value={{
        enable,
        error,
        capture,
        setCapture: setCaptureCallback,
        setEnable,
        setError,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

CameraProvider.propTypes = propTypes;
CameraProvider.defaultProps = defaultProps;

export default CameraProvider;
