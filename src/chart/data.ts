import { Series } from './types';

export const series: Series[] = [
  {
    name: 'Series 1',
    color: 'orange',
    data: [
      { date: new Date(2024, 2, 2).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 5).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 8).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 10).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 12).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 15).getTime(), value: Math.random() },
    ],
  },
  {
    name: 'Series 2',
    color: 'green',
    data: [
      { date: new Date(2024, 2, 2).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 4).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 5).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 9).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 11).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 13).getTime(), value: Math.random() },
    ],
  },
  {
    name: 'Series 3',
    color: 'blue',
    data: [
      { date: new Date(2024, 2, 2).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 6).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 8).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 10).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 12).getTime(), value: Math.random() },
    ],
  },
];
