import { format } from 'date-fns';

export const formatTimestamp = (timestampMs: number) =>
  format(new Date(timestampMs), 'dd.MM HH:mm');

export const getDuration = (startTimestamp: number, endTimestamp: number) => endTimestamp - startTimestamp