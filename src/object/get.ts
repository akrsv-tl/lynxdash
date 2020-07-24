/**
 *
  @description Возвращает значение из объекта по ключу
  @param {string} path Путь из ключей до значения объекта
  @param {object} obj Передаваемый объект
  @returnType {any | undefined}
*/

export function get (path: string, obj: object): any {
  if (path === '' || !obj) {
    throw new Error('Отсутствует необходимый параметр');
  }

  const keys: Array<string> = path.split('.');
  let key: string;

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    if (!obj.hasOwnProperty(key)) {
      return undefined;
    } else {
      obj = obj[key];
    }
  }

  return obj;
}