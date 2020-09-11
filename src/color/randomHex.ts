/**
 *
 * @description Генерация случайного шестнадцатеричного цвета
 * @returnType {string}
 */

export function getRandomHex():string {
  return '#' + Math.floor((Math.random() * 16777215)).toString(16);
}