/**
 * Used to create a range array
 * @param {number} start Start of the range
 * @param {number} end End of the range
 */
export function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
