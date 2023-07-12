import type { Predicate } from './types'

/**
 * determine if the elements are sorted
 */
export function isSorted<T>(arr: T[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false
  }
  return true
}

/**
 * determine if two arrays of elements are the same
 */
export function isEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

function removeConsecutiveDuplicates<T>(arr: T[]) {
  if (arr.length < 2) return
  let i = 0
  for (let j = 1; j < arr.length; j++) if (arr[j] > arr[i]) arr[++i] = arr[j]
  arr.length = i + 1
}
/**
 * The array is being re-indexed when you do a .splice()
 * see @link https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop
 */
function removeNonConsecutiveDuplicates<T>(arr: T[]) {
  if (arr.length < 2) return
  const map: Map<T, number> = new Map()
  let i = 0
  while (i < arr.length) {
    if (map.has(arr[i])) {
      arr.splice(i, 1)
    } else {
      map.set(arr[i], i)
      i++
    }
  }
}
/**
 * remove duplicates
 */
export function unique<T>(arr: T[]) {
  isSorted(arr)
    ? removeConsecutiveDuplicates(arr)
    : removeNonConsecutiveDuplicates(arr)
}

/**
 * get the max value of number array
 */
export function getMax(arr: readonly number[]): number {
  return Math.max(...arr)
}

/**
 *  return the number of elements satisfying specific criteria
 */
export function count<T>(arr: readonly T[], value: T): number {
  let result = 0
  for (const item of arr) {
    if (item === value) result++
  }
  return result
}

export function countIf<T>(arr: readonly T[], callback: Predicate<T>): number {
  let result = 0
  for (const item of arr) {
    if (callback(item)) result++
  }
  return result
}

/**
 *  remove elements satisfying specific criteria
 */
export function remove<T>(arr: T[], value: T) {
  const idx = arr.indexOf(value)
  if (idx < 0) return
  return arr.splice(idx, 1)[0]
}

export function removeIf<T>(arr: T[], callback: Predicate<T>): T[] {
  const deleted = []
  let i = 0
  while (i < arr.length) {
    if (callback(arr[i])) deleted.push(...arr.splice(i, 1))
    else i++
  }
  return deleted
}

/**
 * Generate a range of numbers.`end` is exclusive.
 * @example
 * ```ts
 *  for(const x of range(10))
 *    console.log(x)
 * ```
 * @example
 * ```ts
 *  const arr: number[] = [...range(10)] // [0, 1, 2, ... 9]
 *  const arr: number[] = [...range(9, 0, -3)] // [9, 6, 3]
 * ```
 */
export function* range(start: number, end?: number, step = 1) {
  if (end == undefined) {
    end = start
    start = 0
  }
  while ((end - start) * step > 0) {
    yield start
    start += step
  }
}

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  const pivot = arr[0]
  const left = [],
    right = []
  for (let idx = 1; idx < arr.length; idx++) {
    const value = arr[idx]
    if (value > pivot) {
      right.push(value)
    } else {
      left.push(value)
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
