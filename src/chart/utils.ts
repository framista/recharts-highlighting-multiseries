import { sortNumbers } from '../utils/array.utils';
import { ChartData, Limitation, Series } from './types';

export const getUniqueTimestamps = (chartSeries: Series[], limitations: Limitation[]) : number[] => sortNumbers([...new Set(
  [...chartSeries.flatMap(({ data }) => data.flatMap(({ date }) => date)),
    ...limitations.flatMap(({ ranges}) => ranges.flatMap(( { end, start}) =>[end, start] ))]
)])

export const getCharData = (chartSeries: Series[], uniqueTimestamps: number[]): ChartData => {
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

  const data: ChartData = uniqueTimestamps.map((date) => {
    const d: ChartData[number] = Object.keys(seriesDataRecords).reduce(
      (p, c) => ({ ...p, [c]: seriesDataRecords[c][date] || null }),
      {}
    );
    return { date, ...d };
  });

  return data;
};
