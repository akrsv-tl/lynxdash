import { checkType } from './check-type';

export function isObject(obj): obj is object {
  return checkType(obj) === 'object';
}