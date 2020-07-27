import { checkType } from './check-type';

test('Check type of value', () => {
  expect(checkType(new Date)).toBe('date');
  expect(checkType(JSON)).toBe('json');
  expect(checkType(Math)).toBe('math');
  expect(checkType(new Boolean(true))).toBe('boolean');
  expect(checkType([1, 2, 3])).toBe('array');
});