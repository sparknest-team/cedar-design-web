import type { Dayjs } from 'dayjs';
import { DisabledDate, DisabledTime, RangeDisabledDate, RangeDisabledTime } from '../types';
interface IsDisabledProps {
    mode?: string;
    showTime?: boolean;
    disabledDate?: DisabledDate | RangeDisabledDate;
    disabledTime?: DisabledTime | RangeDisabledTime;
    isRange?: boolean;
}
export default function useIsDisabledDate(props: IsDisabledProps): (value: Dayjs | undefined, type?: "start" | "end") => boolean | undefined;
export {};
