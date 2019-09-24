import GeneratedImage from 'components/App/models/GeneratedImage';
import Mapper from 'components/App/services/Mapper';
import ResponseData from 'components/App/services/ResponseData';

class Service {
  private root: string;

  constructor() {
    this.root = 'http://35.229.141.232:8080';
  }

  async generateImages(file: File, id: string): Promise<GeneratedImage[]> {
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch(`${this.root}/images`, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const data: ResponseData = await response.json();
      return Mapper.toJson(data, id);
    }
    throw new Error();
  }
}

export default Service;
