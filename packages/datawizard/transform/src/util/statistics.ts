export {
  sum,
  average,
  average as avg,
  mean,
  min,
  max,
  median,
  variance,
  standardDeviation as stdevp,
  sampleStandardDeviation as stdev,
  mode,
  product,
} from 'simple-statistics';

export function count(rows: any[]): number {
  return rows.length;
}

export function distinct(rows: any[]): number {
  return Array.from(new Set(rows)).length;
}
export { distinct as countd };

export function valid(rows: any[]): number {
  return rows.length - rows.filter((item: any) => [null, undefined, NaN].includes(item)).length;
}

/**
 * aggregate operation
 * @public
 */
export type Operations =
  | 'sum'
  | 'average'
  | 'avg' // equals to 'average'
  | 'mean'
  | 'min'
  | 'max'
  | 'median'
  | 'variance'
  | 'stdevp'
  | 'stdev'
  | 'mode'
  | 'product'
  | 'count'
  | 'distinct'
  | 'countd' // equals to 'distinct'
  | 'valid';
