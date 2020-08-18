import { range } from './range';

test('Get array with ordered numbers', () => {
  expect(range(3)).toEqual([0, 1, 2]);
  expect(range(4, 2)).toEqual([0, 2, 4, 6]);
});