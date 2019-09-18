import Filter from './Filter';
import OriginalImage from './OriginalImage';

class GeneratedImage extends OriginalImage {
  originalImageId: string;

  type: Filter;

  constructor(id: string, src: string, originalImageId: string, type: Filter) {
    super(id, src);
    this.originalImageId = originalImageId;
    this.type = type;
  }
}

export default GeneratedImage;
