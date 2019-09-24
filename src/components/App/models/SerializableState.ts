import OriginalImage from './OriginalImage';
import GeneratedImage from './GeneratedImage';

interface SerializableState {
  originalImages: OriginalImage[];
  generatedImages: GeneratedImage[];
}

export default SerializableState; // eslint-disable-line no-undef
