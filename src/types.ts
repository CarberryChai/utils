/**
 * get the element type of an array
 */
type ElementOf<T> = T extends (infer E)[] ? E : never
