import { format } from 'date-fns';
import { ChartData, Series } from './types';

export const formatTimestamp = (timestampMs: number) =>
  format(new Date(timestampMs), 'dd.MM HH:mm');

const sortNumbers = (array: number[]) => array.sort((a, b) => a - b);

export const getCharData = (chartSeries: Series[]): ChartData => {
  const uniqueTimestamps = new Set(
    chartSeries.flatMap(({ data }) => data.flatMap(({ date }) => date))
  );

  const seriesDataRecords: Record<
    string,
    Record<number, number>
  > = chartSeries.reduce(
    (p, series) => ({
      ...p,
      [series.name]: series.data.reduce(
        (prev, curr) => ({ ...prev, [curr.date]: curr.value }),
        {}
      ),
    }),
    {}
  );

  const data: ChartData = sortNumbers([...uniqueTimestamps]).map((date) => {
    const d: ChartData[number] = Object.keys(seriesDataRecords).reduce(
      (p, c) => ({ ...p, [c]: seriesDataRecords[c][date] || null }),
      {}
    );
    return { date, ...d };
  });

  return data;
};
