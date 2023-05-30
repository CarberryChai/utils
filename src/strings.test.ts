import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('strings until function', () => {
  it('capitalize', () => {
    expect(capitalize('')).toEqual('')
    expect(capitalize('hello')).toEqual('Hello')
  })
})
