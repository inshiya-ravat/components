export function generateGrid(data: Array<number>, start: number, end: number) {
  const result = [];
  const days = [];
  for (let i = start; i < end; i++) {
    const row = [];
    days.push(data[i]);
    for (let j = 0; j < data[i]; j++) {
      row.push(1);
    }
    result.push(row);
  }
  return {
    result: result,
    days: days
  };
}