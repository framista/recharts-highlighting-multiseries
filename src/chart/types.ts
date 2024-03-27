export type Series = {
  name: string;
  data: { date: number; value: number }[];
};

export type ChartData = Record<string, number | null>[];

export type Limitation = {
  name: Series['name'];
  color: string;
  ranges: { start: number, end: number }[]
}