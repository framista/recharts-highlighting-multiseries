import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Limitation, Series } from './types';
import { useChart } from './useChart';
import { formatTimestamp } from '../utils/date.utils';
import { limitColor } from './data';

type Props = {
  chartSeries: Series[];
  limitations?: Limitation[]
};

export const Chart = ({ chartSeries, limitations = [] }: Props) => {
  const { chartData, countPercentage } = useChart(chartSeries);

  return (
    <ResponsiveContainer width={700} height={500}>
      <LineChart width={600} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis   
          domain={["auto", "auto"]}
          type="number"
          dataKey="date" 
          tickFormatter={formatTimestamp}
          scale="time"
        />
        <YAxis />
        <Tooltip />
        <Legend />

        
        <defs>
          {limitations.flatMap((e) => {
              let lastOffset = 0;
              return (
                <linearGradient key={e.name} id={e.name} x1="0" y1="0" x2="100%" y2="0">
                    {e.ranges.map((r, index) => {
                      const t0 = countPercentage(
                        r.start,
                        e.ranges[index - 1]?.end || chartData[0]?.date as number
                        ) + lastOffset;
                      const period = countPercentage(r.end, r.start);
                      lastOffset = t0 + period;

                      return (
                        <React.Fragment key={r.start}>
                          <stop offset={`${t0}%`} stopColor={e.color} />
                          <stop offset={`${t0}%`} stopColor={limitColor} />
                          <stop offset={`${lastOffset}%`} stopColor={limitColor} />
                          <stop offset={`${lastOffset}%`} stopColor={e.color} />
                       </React.Fragment>
                      );
                    })}            
                    <stop offset={`100%`} stopColor={e.color} />
                </linearGradient>)
              })}
          </defs>
    
        {chartSeries.map((s) => (
          <Line
            connectNulls
            dataKey={s.name}
            name={s.name}
            key={s.name}
            stroke={`url(#${s.name})`}
            type="monotone"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
