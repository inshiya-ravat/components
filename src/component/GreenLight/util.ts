export function countTotalBoxes(arr: Array<boolean[]>) {
  let count = 0;
  for (const boxRow of arr) {
    for (const boxPresent of boxRow) {
      if (boxPresent) {
        count = count + 1;
      }
    }
  }
  return count;
}
