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
import { formatTimestamp } from './utils';
import { Series } from './types';
import { useChart } from './useChart';

type Props = {
  chartSeries: Series[];
};

export const Chart = ({ chartSeries }: Props) => {
  const { chartData } = useChart(chartSeries);

  return (
    <ResponsiveContainer width={600} height={500}>
      <LineChart width={600} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={formatTimestamp} />
        <YAxis />
        <Tooltip />
        <Legend />
        {chartSeries.map((s) => (
          <Line
            connectNulls
            dataKey={s.name}
            name={s.name}
            key={s.name}
            stroke={s.color}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
