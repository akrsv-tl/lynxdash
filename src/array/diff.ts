import { get } from '../object/get';
import { isObject } from '../is-object';

type DiffStatuses = 'added' | 'deleted' | 'common';

/**
 * 
 * @param {Array} arr1 Первый массив. С которым сравниваем
 * @param {Array} arr2 Второй массив. Который сравниваем
 * @param {string} path Путь из ключей до значения, по которому определятся значение объекта. Необязательный параметр
 * @description Функция возвращает объект, указывающий разницу двух массивов. Добавленные, удаленные и совпадающие элементы
 * @returnType {Object}
 */

export function diff<T>(arr1: T[], arr2: T[]): Record<DiffStatuses, T[]> 
export function diff<O extends Record<string, any>>(arr1: O[], arr2: O[], path: string): Record<DiffStatuses, O[]> 
export function diff<T>(arr1: T[], arr2: T[], path?: string): Record<DiffStatuses, T[]>{
  const addeds = arr2.filter(item => isObject(item) ? !arr1.includes(get(path, item)) : !arr1.includes(item));
  const deleteds = arr1.filter(item => isObject(item) ? !arr2.includes(get(path, item)) : !arr2.includes(item));
  const commons = arr1.filter(item => isObject(item) ? arr2.includes(get(path, item)) : arr2.includes(item));

  return {
    added: addeds,
    deleted: deleteds,
    common: commons
  }
}