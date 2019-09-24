import Filter from 'components/App/models/Filter';
import GeneratedImage from 'components/App/models/GeneratedImage';
import ResponseData from 'components/App/services/ResponseData';
import generateId from 'libs/generateId';

class Mapper {
  static toJson(data: ResponseData, id: string): GeneratedImage[] {
    const result: GeneratedImage[] = [];
    result.push(
      ...Object.entries(data.gender).map(
        ([key, value]) =>
          new GeneratedImage(generateId(), value, id, Filter.GENDER, parseInt(key, 10))
      )
    );
    result.push(
      ...Object.entries(data.smile).map(
        ([key, value]) =>
          new GeneratedImage(generateId(), value, id, Filter.SMILE, parseInt(key, 10))
      )
    );
    return result;
  }

  static fromJson() {}
}

export default Mapper;
