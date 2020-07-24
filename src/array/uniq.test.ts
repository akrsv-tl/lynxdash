import { uniq } from './uniq';

test('Get unique value from array', () => {
  const numbers = [1, 2, 2, 2, 6, 43, 11, 43];
  const words = ['cucumber', 'apple', 'apple', 'tomato'];
  const users = [{id: 1, name: 'Alice', age: 24}, {id: 2, name: 'Richard', age: 42}, {id: 1, name: 'Alice', age: 24}];
  const now = new Date();
  const jan = new Date('2020-01-01');
  const dates = [now, jan, now, jan];
  
  expect(uniq(numbers)).toEqual([1, 2, 6, 11, 43]);
  expect(uniq(words)).toEqual(['cucumber', 'apple', 'tomato']);
  expect(uniq(users, 'id')).toEqual([{id: 1, name: 'Alice', age: 24}, {id: 2, name: 'Richard', age: 42}]);
  expect(uniq(dates)).toEqual([now, jan]);
});