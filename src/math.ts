export function isOdd(x: number): boolean {
  return (x & 1) === 1
}

export function factorial(n: number): number {
  let result = 1
  while (n > 1) result *= n--
  return result
}

export function clamp(min: number, value: number, max: number): number {
  return Math.min(Math.max(min, value), max)
}
