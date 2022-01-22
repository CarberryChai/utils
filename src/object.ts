export function toString(obj: any): string {
  return Object.prototype.toString.call(obj)
}

export function hasOwnProperty<T>(obj: T, key: PropertyKey) {
  if (obj === null || obj === undefined) return false
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function isKeyOf<T extends object>(obj: T, key: PropertyKey): boolean {
  return key in obj
}
