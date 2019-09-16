import React, { useContext } from 'react';
import PromiseFileReader from 'promise-file-reader';
import ImageUploader from 'react-images-upload';

import { AppStateContext } from 'components/App';
import Flex from 'components/Flex';
import FlexLayout from 'components/FlexLayout';
import Showcase from 'components/Showcase';
import SlideImages from 'components/SlideImages';

import dataset from 'components/Showcase/constants';

import './resetReactImageUpload.css';

const IndexPage: React.FC = () => {
  const {
    visibleImages,
    selectedImageId,
    setSelectedImage,
    generateImages,
    showcase,
    toggleShowcase,
  } = useContext(AppStateContext);

  const handleUpload = async (files: File[]) => {
    const image = await PromiseFileReader.readAsDataURL(files[files.length - 1]);
    generateImages(image);
  };

  const handleImageClick = (id: string) => {
    if (selectedImageId === id) {
      toggleShowcase();
    } else {
      setSelectedImage(id);
    }
  };

  return (
    <FlexLayout
      maxWidth={720}
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      margin="0 auto"
    >
      <ImageUploader className="a" buttonText="Choose image" onChange={handleUpload} />
      <Flex height={200}>
        <SlideImages images={visibleImages} onClick={handleImageClick} />
      </Flex>
      {showcase && (
        <Showcase
          images={dataset.filter(({ srcId }) => srcId === selectedImageId)}
          onClick={() => {}}
        />
      )}
    </FlexLayout>
  );
};

export default IndexPage;
