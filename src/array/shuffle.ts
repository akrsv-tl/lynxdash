/**
 * 
 * @param {array} array Массив, который будет переупорядочен
 * @description Функция переупорядочивает (перемешивает) массив случайным образом по алгоритму "Тасование Фишера-Йетса"
 * @returnType {array}
 */
export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex: number = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }

  return newArray;
}