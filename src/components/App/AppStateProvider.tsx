import React, { useCallback, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PropsType from 'components/PropsType';
import generateId from 'libs/generateId';

import GeneratedImage from './models/GeneratedImage';
import OriginalImage from './models/OriginalImage';
import SerializableState from './models/SerializableState';
import VisibleImage from './models/VisibleImage';
import Service from './services';

const defaultValue = {
  visibleImages: [] as VisibleImage[],
  originalImages: [] as OriginalImage[],
  setOriginalImages(images: OriginalImage[]) {},
  generateImages(imageSrc: string, file: File) {},
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
  const [originalImages, setOriginalImages] = useState<OriginalImage[]>([]);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [selectedImageId, setSelectedImage] = useState('');
  const [showcase, setShowcase] = useState(false);

  useEffect(() => {
    const previousState = localStorage.getItem('face-transformation:state');
    if (previousState) {
      const state: SerializableState = JSON.parse(previousState);
      const initialGeneratedImages = state.generatedImages.map(
        ({ id, src, originalImageId, type, coefficient }) =>
          new GeneratedImage(id, src, originalImageId, type, coefficient)
      );
      const initialOriginalImages = state.originalImages.map(
        ({ id, src }) => new OriginalImage(id, src)
      );
      setGeneratedImages(initialGeneratedImages);
      setOriginalImages(initialOriginalImages);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      const state: SerializableState = {
        originalImages,
        generatedImages,
      };
      localStorage.setItem('face-transformation:state', JSON.stringify(state));
    };
    window.addEventListener('beforeunload', handler);
    return window.addEventListener('beforeunload', handler);
  }, [originalImages, generatedImages]);

  const toggleShowcase = () => {
    setShowcase(!showcase);
  };

  const generateImages = useCallback(
    async (imageSrc: string, file: File) => {
      const id = generateId();
      const newOriginalImages = originalImages.slice();
      newOriginalImages.unshift(new OriginalImage(id, imageSrc));
      setOriginalImages(newOriginalImages);
      setSelectedImage(id);

      const service = new Service();
      const data = await service.generateImages(file, id);
      const newGeneratedImages = data.concat(generatedImages);
      setGeneratedImages(newGeneratedImages);
    },
    [originalImages, generatedImages]
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
