export type Series = {
  color: string;
  name: string;
  data: { date: number; value: number }[];
};

export type ChartData = Record<string, number | null>[];

export type Limitation = {
  name: Series['name'];
  color: Series['color'];
  ranges: { start: number, end: number }[]
}