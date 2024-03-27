import { useMemo } from "react";
import { Limitation } from "../types";
import { getSeriesLimitations } from "./utils";

export const useTooltip = (limitations: Limitation[], timestamp: number) => {
    const serieslimitations = useMemo(() => getSeriesLimitations(limitations, timestamp),[limitations, timestamp])
    
    return { serieslimitations }
}