/**
 * 
 * @param {number} count Количество элементов для генерации
 * @param {number} step Шаг заполнения (необязатальный)
 * @description Функция возвращает массив, заполненный числами с указанным шагом
 * @returnType {Array<number>} 
 */

export function range(count: number, step?: number): Array<number> {
  if (count < 1 || step < 1) {
    throw new Error('Все параметры должны быть натуральными числами');
  }

  return Array.from({ length: count }, (_, k) => {
    if (step) {
      return 0 + step * (k);
    }
    return k;
  });
}