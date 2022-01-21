export function sleep(time: number = 1000): Promise<undefined> {
  return new Promise(reslove => {
    setTimeout(reslove, time)
  })
}

/**
 *  generate 26 letters
 * ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 *
 * @export
 * @return {*}  {string[]}
 */
export function upperLetters(): string[] {
  return Array.from({ length: 26 }, (_, idx) => String.fromCodePoint(65 + idx))
}

export function lowerLetters(): string[] {
  return Array.from({ length: 26 }, (_, idx) => String.fromCodePoint(91 + idx))
}
