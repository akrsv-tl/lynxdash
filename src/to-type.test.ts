import { toType } from './to-type';

test('Check type of value', () => {
  expect(toType(new Date)).toBe('date');
  expect(toType(JSON)).toBe('json');
  expect(toType(Math)).toBe('math');
  expect(toType(new Boolean(true))).toBe('boolean');
  expect(toType([1, 2, 3])).toBe('array');
});