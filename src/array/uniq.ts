import { get } from '../object/get';
import { toType } from '../to-type';

/**
 *
 * @param {array} array Передаваемый массив
 * @param {string} path Путь из ключей до значения, по которому определятся уникальность объекта. Необязательный параметр.
 * @description Функция возвращает массив уникальных значений
 * @returnType {array}
 */

export function uniq<T>(array: T[]): T[];
export function uniq<O extends Record<string, any>>(array: O[], path: string): O[];
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