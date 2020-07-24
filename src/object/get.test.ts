import { get } from './get';

test('Return value from object', () => {
  const rect = {
    id: 1,
    size: {
      width: 12,
      height: 15
    }
  }

  expect(get('size.width', rect)).toEqual(12);
  expect(get('id.size', rect)).toEqual(undefined);
  expect(get('blabla', rect)).toEqual(undefined);
  expect(() => {
    get('', rect)
  }).toThrow();
});