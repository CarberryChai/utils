import { describe, expect, it } from 'vitest'
import { range } from './array'

describe('array utils test', () => {
  it('range', () => {
    expect(Array.from(range(0))).toEqual([])
    expect(Array.from(range(2))).toEqual([0, 1])
    expect(Array.from(range(2, 5))).toEqual([2, 3, 4])
    expect(Array.from(range(2, 10, 2))).toEqual([2, 4, 6, 8])
  })
})
