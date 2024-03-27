import { Limitation } from "../types";

export const getSeriesLimitations = (limitations: Limitation[], timestamp: number): Record<string, boolean> => 
limitations.reduce((p, limitation) => ({
    ...p, 
    [limitation.name]: limitation.ranges.some(({ start, end }) => timestamp >= start && timestamp <= end )
    }), 
{});
