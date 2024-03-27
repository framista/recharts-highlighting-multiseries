import { useCallback, useMemo } from 'react';
import { Limitation, Series } from './types';
import { getCharData, getUniqueTimestamps } from './utils';
import { getDuration } from '../utils/date.utils';
import { getFirstLast } from '../utils/array.utils';

export const useChart = (chartSeries: Series[], limitations: Limitation[]) => {
  const uniqueTimestamps = useMemo(() => getUniqueTimestamps(chartSeries, limitations), [chartSeries, limitations]);
  const chartData = useMemo(() => getCharData(chartSeries, uniqueTimestamps), [uniqueTimestamps]);
  const totalDuration = useMemo(() => getDuration(...getFirstLast(uniqueTimestamps)), [uniqueTimestamps])

  const countPercentage = useCallback((end: number, start: number) =>
    (getDuration(start, end) / totalDuration) * 100 ,[totalDuration]);

  return { chartData, countPercentage };
};
