import { useMemo } from 'react';
import { Series } from './types';
import { getCharData } from './utils';

export const useChart = (chartSeries: Series[]) => {
  const chartData = useMemo(() => getCharData(chartSeries), []);

  return { chartData };
};
