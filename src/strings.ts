/**
 *  first letter uppercase, other lowcase
 * @example
 * ```
 * capitalize('hello') => 'Hello'
 * ```
 */
export function capitalize(str: string): string {
  if (str.length === 0) return str
  const result = Array.from(str)
  result[0] = result[0].toUpperCase()
  return result.join('')
}
