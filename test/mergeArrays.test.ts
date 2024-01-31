import { mergeArrays } from '../src/mergeArrays';

describe('mergeArrays', () => {
  it('should merge two sorted arrays', () => {
    const arr1 = [1, 3, 5, 7, 11, 18];
    const arr2 = [2, 4, 6, 8, 10];

    const result = mergeArrays(arr1, arr2);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 18]);
  });
});
