import React, { useContext, useMemo } from 'react';
import PromiseFileReader from 'promise-file-reader';
import ImageUploader from 'react-images-upload';

import { AppStateContext } from 'components/App';
import Button from 'components/Button';
import Flex from 'components/Flex';
import FlexLayout from 'components/FlexLayout';
import Showcase from 'components/Showcase';
import SlideImages from 'components/SlideImages';

import './resetReactImageUpload.css';

const IndexPage: React.FC = () => {
  const {
    visibleImages,
    selectedImageId,
    setSelectedImage,
    generateImages,
    generatedImages,
    showcase,
    toggleShowcase,
    clear,
  } = useContext(AppStateContext);

  const handleUpload = async (files: File[]) => {
    const imageSrc = await PromiseFileReader.readAsDataURL(files[files.length - 1]);
    generateImages(imageSrc, files[files.length - 1]);
  };

  const handleImageClick = (id: string) => {
    if (selectedImageId === id) {
      toggleShowcase();
    } else {
      setSelectedImage(id);
    }
  };

  const images = useMemo(
    () => generatedImages.filter(({ originalImageId }) => originalImageId === selectedImageId),
    [generatedImages, selectedImageId]
  );

  return (
    <FlexLayout
      maxWidth={720}
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      margin="0 auto"
    >
      <ImageUploader className="a" buttonText="Choose image" onChange={handleUpload} />
      <Button type="button" marginBottom={10} onClick={clear}>
        Clear
      </Button>
      <Flex height={200}>
        <SlideImages images={visibleImages} onClick={handleImageClick} />
      </Flex>
      {showcase && <Showcase images={images} onClick={() => {}} />}
    </FlexLayout>
  );
};

export default IndexPage;
