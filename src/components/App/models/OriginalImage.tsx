import generateId from 'libs/generateId';

class OriginalImage {
  id: string = generateId();

  src = '';

  constructor(id: string, src: string) {
    this.id = id;
    this.src = src;
  }
}

export default OriginalImage;
