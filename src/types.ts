/**
 * get the element type of an array
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never

export type Predicate<T> = (value: T) => boolean

export type Falsy = false | 0 | -0 | 0n | '' | null | undefined | void
