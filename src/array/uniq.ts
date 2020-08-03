import { get } from '../object/get';
import { checkType } from '../check-type';

/**
 *
 * @param {Array} array Передаваемый массив
 * @param {string} path Путь из ключей до значения, по которому определятся уникальность объекта. Необязательный параметр.
 * @description Функция возвращает массив уникальных значений
 * @returnType {Array}
 */

export function uniq<T>(array: T[]): T[];
export function uniq<O extends Record<string, any>>(array: O[], path: string): O[];
export function uniq<T>(array, path?: string): T[] {
  return Object.values(array.reduce((acc, curr) => {
    if (checkType(curr) === 'object') {
      acc[get(path, curr)] = curr;
    } else {
      acc[curr] = curr;
    }

    return acc;
  }, {}));
}