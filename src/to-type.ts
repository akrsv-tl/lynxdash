/**
 * 
 * @param obj Значение, тип которого необходимо проверить
 * @description Улучшенная версия typeof
 * @returnType {string}
 */

export function toType(obj) {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}