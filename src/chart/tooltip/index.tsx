import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import './styles.css'
import { formatTimestamp } from '../../utils/date.utils';
import { Limitation } from '../types';
import { useTooltip } from './useTooltip';

type Props = TooltipProps<ValueType, NameType> & {
    limitations: Limitation[]
}

export const CustomizedTooltip = ({ active, label, limitations,  payload }: Props) => {
    const { serieslimitations } = useTooltip(limitations, label);
    
    if (!active || !payload) return null

    return (
        <div className='tooltip'>
            <div className='tooltip-timestamp'>{formatTimestamp(label)}</div>
            {payload.map(p => {
                if (!p.dataKey || (!serieslimitations[p.dataKey] && !p.payload[p.dataKey])) return null;
                return (
                    <div className='tooltip-row'>
                        <p>{p.dataKey}</p>
                        <div className='tooltip-row'>
                            {serieslimitations[p.dataKey] && <div className='tooltip-limit' />}
                            {p.payload[p.dataKey] && <p>{p.dataKey && p.payload[p.dataKey].toFixed(2)}</p>}
                        </div>
                    </div>
            )})}
        </div>
    )
}