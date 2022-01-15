import { describe, expect, it } from 'vitest'
import { factorial, isOdd } from './math'

describe('math function test', () => {
  it('isOdd', () => {
    expect(isOdd(0)).toBe(false)
    expect(isOdd(1)).toBe(true)
    expect(isOdd(-1)).toBe(true)
    expect(isOdd(2)).toBe(false)
    expect(isOdd(3)).toBe(true)
    expect(isOdd(101)).toBe(true)
  })

  it('factorial', () => {
    expect(factorial(0)).toEqual(1)
    expect(factorial(1)).toEqual(1)
    expect(factorial(3)).toEqual(6)
  })
})
