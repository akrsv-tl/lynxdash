import { diff } from './diff';

test('Get diff of arrays', () => {
  const nums1 = [1, 2];
  const nums2 = [2, 3];

  const users1 = [
    {name: 'Alice', age: 22},
    {name: 'Scarlett', age: 24}
  ];
  const users2 = [
    {name: 'Alice', age: 22},
    {name: 'Scarlett', age: 24},
    {name: 'Christine', age: 24}
  ]

  expect(diff(nums1, nums2)).toEqual({added: [3], deleted: [1], common: [2]});
  expect(diff(users1, users2, 'age')).toEqual({added: [{name: 'Christine', age: 24}], deleted: [], common: [{name: 'Scarlett', age: 24}]});
});