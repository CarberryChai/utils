/**
 * Generate a range of numbers. the `end` is exclusive.
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
