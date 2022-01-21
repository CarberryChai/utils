import { describe, it, expect } from 'vitest'
import { upperLetters } from './utils'

describe('utils test', () => {
  it('upperLetters', () => {
    expect(upperLetters()).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ])
  })
})
