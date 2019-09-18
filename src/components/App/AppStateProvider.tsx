import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import PropsType from 'components/PropsType';
import generateId from 'libs/generateId';

import GeneratedImage from './models/GeneratedImage';
import OriginalImage from './models/OriginalImage';
import VisibleImage from './models/VisibleImage';

import originalDataset from '../SlideImages/constants';
import generatedDataset from '../Showcase/constants';

const defaultValue = {
  visibleImages: [] as VisibleImage[],
  originalImages: [] as OriginalImage[],
  setOriginalImages(images: OriginalImage[]) {},
  generateImages(imageSrc: string) {},
  generatedImages: [] as GeneratedImage[],
  setGeneratedImages(images: GeneratedImage[]) {},
  selectedImageId: '',
  setSelectedImage(id: string) {},
  showcase: false,
  toggleShowcase() {},
};

export const AppStateContext = React.createContext(defaultValue);

const propTypes = { children: PropTypes.node };
const defaultProps = { children: null };

type AppStateProps = PropsType<typeof propTypes, typeof defaultProps>;

const AppStateProvider: React.FC<AppStateProps> = ({ children }) => {
  const [originalImages, setOriginalImages] = useState<OriginalImage[]>(
    originalDataset.map(({ id, src }) => new OriginalImage(id, src))
  );
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>(
    generatedDataset.map(({ id, src, srcId, type }) => new GeneratedImage(id, src, srcId, type))
  );
  const [selectedImageId, setSelectedImage] = useState('');
  const [showcase, setShowcase] = useState(false);

  const toggleShowcase = () => {
    setShowcase(!showcase);
  };

  const generateImages = useCallback(
    (imageSrc: string) => {
      const id = generateId();
      const newOriginalImages = originalImages.slice();
      newOriginalImages.unshift(new OriginalImage(id, imageSrc));
      setOriginalImages(newOriginalImages);
      setSelectedImage(id);
    },
    [originalImages]
  );

  const visibleImages = useMemo(() => {
    return originalImages.map(({ id, src }) => ({
      id,
      src,
      selected: selectedImageId === id,
      generated: generatedImages.some(image => id === image.originalImageId),
    }));
  }, [selectedImageId, originalImages, generatedImages]);

  return (
    <AppStateContext.Provider
      value={{
        visibleImages,
        originalImages,
        setOriginalImages,
        generateImages,
        generatedImages,
        setGeneratedImages,
        selectedImageId,
        setSelectedImage,
        showcase,
        toggleShowcase,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = propTypes;
AppStateProvider.defaultProps = defaultProps;

export default AppStateProvider;
