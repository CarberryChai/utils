import { describe, expect, it } from 'vitest'
import {
  count,
  countIf,
  getMax,
  isEqual,
  isSorted,
  range,
  remove,
  removeIf,
  unique,
  quickSort
} from './array'
import { isOdd } from './math'

describe('array utils test', () => {
  it('range', () => {
    expect(Array.from(range(0))).toEqual([])
    expect(Array.from(range(2))).toEqual([0, 1])
    expect(Array.from(range(2, 5))).toEqual([2, 3, 4])
    expect(Array.from(range(2, 10, 2))).toEqual([2, 4, 6, 8])
    expect(Array.from(range(9, 0, -3))).toEqual([9, 6, 3])
  })

  it('getMax', () => {
    expect(getMax([1, 0, -5, 10, 2, 40])).toEqual(40)
  })

  it('count', () => {
    expect(count([1, 2, 3, 4, 5], 9)).toEqual(0)
    expect(count([1, 1, 1], 1)).toEqual(3)
  })

  it('countIf', () => {
    expect(countIf([1, 2, 3, 4, 5], isOdd)).toEqual(3)
  })

  it('remove', () => {
    const arr = [1, 2, 2, 3]
    remove(arr, 2)
    expect(arr).toEqual([1, 2, 3])
  })

  it('removeIf', () => {
    const arr = [...range(10)]
    expect(removeIf(arr, isOdd)).toEqual([1, 3, 5, 7, 9])
    expect(arr).toEqual([0, 2, 4, 6, 8])
  })

  it('isSorted', () => {
    expect(isSorted([1, 2, 3])).toEqual(true)
    expect(isSorted([2, 1, 3])).toEqual(false)
  })

  it('isEqual', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toEqual(true)
    expect(isEqual([1, 2, 3, 4], [1, 2, 3])).toEqual(false)
  })

  it('unique', () => {
    const arr1 = [1, 2, 2, 3, 3, 4, 4, 5]
    const arr2 = [1, 3, 2, 5, 3, 1, 9]
    unique(arr1)
    unique(arr2)
    expect(arr1).toEqual([1, 2, 3, 4, 5])
    expect(arr2).toEqual([1, 3, 2, 5, 9])
  })

  it("quickSort", () => {
    const arr1 = [4, 9, 1, 0, 3, 8, 5]
    const arr2 = quickSort(arr1)
    expect(arr2).toEqual([0, 1, 3, 4, 5, 8, 9])
  })
})
