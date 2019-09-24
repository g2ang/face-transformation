import Filter from './Filter';
import OriginalImage from './OriginalImage';

class GeneratedImage extends OriginalImage {
  originalImageId: string;

  type: Filter;

  coefficient: number;

  constructor(id: string, src: string, originalImageId: string, type: Filter, coefficient: number) {
    super(id, src);
    this.originalImageId = originalImageId;
    this.type = type;
    this.coefficient = coefficient;
  }
}

export default GeneratedImage;
