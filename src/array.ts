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

export function count<T>(arr: T[], value: T): number {
  let result = 0
  for (const item of arr) {
    if (item === value) result++
  }
  return result
}

export function countIf<T>(
  arr: readonly T[],
  callback: (item: T) => boolean
): number {
  let result = 0
  for (const item of arr) {
    if (callback(item)) result++
  }
  return result
}

export function remove<T>(arr: T[], value: T) {
  const idx = arr.indexOf(value)
  if (idx < 0) return
  return arr.splice(idx, 1)[0]
}

export function removeIf<T>(arr: T[], callback: (item: T) => boolean): T[] {
  const deleted = []
  for (let index = 0; index < arr.length; index++) {
    if (callback(arr[index])) deleted.push(...arr.splice(index, 1))
  }
  return deleted
}
