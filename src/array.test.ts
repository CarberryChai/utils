import { describe, expect, it } from 'vitest'
import { count, countIf, getMax, range, remove, removeIf } from './array'
import { isOdd } from './math'

describe('array utils test', () => {
  it('range', () => {
    expect(Array.from(range(0))).toEqual([])
    expect(Array.from(range(2))).toEqual([0, 1])
    expect(Array.from(range(2, 5))).toEqual([2, 3, 4])
    expect(Array.from(range(2, 10, 2))).toEqual([2, 4, 6, 8])
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
})
