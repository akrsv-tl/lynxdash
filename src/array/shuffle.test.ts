import { shuffle } from './shuffle';

test('Correct shuffle array', () => {
  const numbers = [1, 3, 23, 45, 12];

  const check = array => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (numbers.includes(array[i])) {
        count++;
      };
    }

    return count === array.length;
  }

  expect(shuffle(numbers).length).toBe(5);
  expect(check(shuffle(numbers))).toBeTruthy();
});