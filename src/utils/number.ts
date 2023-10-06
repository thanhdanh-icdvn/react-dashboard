export function calculatePercentagesByIndex(
  values: number[],
  index: number,
): number {
  const sum: number = values.reduce((acc: number, val: number) => acc + val, 0);
  return Number(
    values
      .map((value: number) => (value / sum) * 100)
      .at(index)
      ?.toFixed(2),
  );
}
