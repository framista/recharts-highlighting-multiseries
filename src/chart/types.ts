export type Series = {
  color: string;
  name: string;
  data: { date: number; value: number }[];
};

export type ChartData = Record<string, number | null>[];
