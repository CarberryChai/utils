/**
 * Generate a range of numbers. the `end` is exclusive.
 * @example
 * ```ts
 *  for(const x of range(10))
 *    console.log(x)
 * ```
 * @example
 * ```ts
 *  const arr: number[] = [...range(10)] // [0, 1, 2, ... 9]
 * ```
 */
export function range(end: number): Iterable<number>
export function range(
  start: number,
  end: number,
  step?: number
): Iterable<number>
export function* range(
  start: number,
  end?: number,
  step?: number
): Iterable<number> {
  if (end === undefined) {
    end = start
    start = 0
    step = 1
  } else {
    step = step ?? 1
  }
  while (start < end) {
    yield start
    start += step
  }
}

/**
 * get the max value of number array
 *
 * @export
 * @param {number[]} arr
 * @return {*}  {number}
 */
export function getMax(arr: number[]): number {
  return Math.max(...arr)
}
