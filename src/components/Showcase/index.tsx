import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Filter from 'components/App/models/Filter';
import FlexLayout from 'components/FlexLayout';
import PropsType from 'components/PropsType';
import ShowcaseImages from 'components/ShowcaseImages';

const propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      coefficient: PropTypes.number.isRequired,
      type: PropTypes.oneOf([Filter.GENDER, Filter.GENDER]).isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

type Showcase = PropsType<typeof propTypes>;

const Showcase: React.FC<Showcase> = ({ images, onClick }) => {
  const smileImages = useMemo(() => images.filter(image => image.type === Filter.SMILE), [images]);
  const genderImages = useMemo(() => images.filter(image => image.type === Filter.GENDER), [
    images,
  ]);
  return ReactDOM.createPortal(
    <FlexLayout backgroundColor="rgba(0,0,0,0.5)" position="fixed" bottom={0}>
      <ShowcaseImages type={Filter.SMILE} images={smileImages} onClick={onClick} />
      <ShowcaseImages type={Filter.GENDER} images={genderImages} onClick={onClick} />
    </FlexLayout>,
    document.getElementById('root') as HTMLElement
  );
};

export default Showcase;
