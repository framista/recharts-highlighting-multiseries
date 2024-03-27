import { Limitation, Series} from './types';

export const series: Series[] = [
  {
    name: 'Series1',
    color: 'navy',
    data: [
      { date: new Date(2024, 2, 2).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 5).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 8).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 10).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 12).getTime(), value: Math.random() },
      { date: new Date(2024, 2, 15).getTime(), value: Math.random() },
    ],
  },
  // {
  //   name: 'Series2',
  //   color: 'green',
  //   data: [
  //     { date: new Date(2024, 2, 2).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 4).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 5).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 9).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 11).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 14).getTime(), value: Math.random() },
  //   ],
  // },
  // {
  //   name: 'Series3',
  //   color: 'blue',
  //   data: [
  //     { date: new Date(2024, 2, 2).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 6).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 8).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 10).getTime(), value: Math.random() },
  //     { date: new Date(2024, 2, 12).getTime(), value: Math.random() },
  //   ],
  // },
];

export const limitations: Limitation[] = [
  {
    name: 'Series1',
    color: 'navy',
    ranges: [
      { start: new Date(2024, 2, 5).getTime(), end: new Date(2024, 2, 6).getTime() },
      { start: new Date(2024, 2, 8).getTime(), end: new Date(2024, 2, 10).getTime() },
      { start: new Date(2024, 2, 13).getTime(), end: new Date(2024, 2, 14).getTime() },
    ]
  },
  // {
  //   name: 'Series2',
  //   color: 'green',
  //   ranges: [
  //     { start: new Date(2024, 2, 5).getTime(), end: new Date(2024, 2, 6).getTime() },
  //     { start: new Date(2024, 2, 11).getTime(), end: new Date(2024, 2, 13).getTime() },
  //   ]
  // },
  // {
  //   name: 'Series3',
  //   color: 'blue',
  //   ranges: [
  //     { start: new Date(2024, 2, 3).getTime(), end: new Date(2024, 2, 5).getTime() },
  //     { start: new Date(2024, 2, 10).getTime(), end: new Date(2024, 2, 11).getTime() },
  //   ]
  // }
]

export const limitColor = 'red'