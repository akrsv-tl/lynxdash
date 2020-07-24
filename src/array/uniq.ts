import { get } from '../object/get';
import { toType } from '../to-type';

export function uniq<T>(array, path?: string): T[] {
  return Object.values(array.reduce((acc, curr) => {
    if (toType(curr) === 'object') {
      acc[get(path, curr)] = curr;
    } else {
      acc[curr] = curr;
    }

    return acc;
  }, {}));
}